import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SESSION_COOKIE = "session";
const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getJwtSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    // Fail loudly rather than silently signing tokens with a guessable
    // default secret — that would be a serious security hole.
    throw new Error(
      "JWT_SECRET is not set. Add it to your .env file before using authentication."
    );
  }
  return new TextEncoder().encode(secret);
}

// ---------- Password hashing ----------

const SALT_ROUNDS = 12;

export async function hashPassword(plainPassword: string): Promise<string> {
  return bcrypt.hash(plainPassword, SALT_ROUNDS);
}

export async function verifyPassword(
  plainPassword: string,
  passwordHash: string
): Promise<boolean> {
  return bcrypt.compare(plainPassword, passwordHash);
}

// Minimum reasonable password policy. Communicated to the user via the
// registration form's own translated helper text — see authPage.register
// in messages/fi.json and messages/en.json.
export const MIN_PASSWORD_LENGTH = 8;

export function isPasswordValid(password: string): boolean {
  return typeof password === "string" && password.length >= MIN_PASSWORD_LENGTH;
}

// ---------- Email normalization ----------

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmailValid(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}

// ---------- Session tokens (JWT) ----------

type SessionPayload = {
  sub: string; // user id
};

export async function createSessionToken(userId: string): Promise<string> {
  return new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getJwtSecret());
}

export async function verifySessionToken(
  token: string
): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());
    if (typeof payload.sub !== "string") return null;
    return { sub: payload.sub };
  } catch {
    // Invalid, expired, or tampered token — treat as "not logged in"
    // rather than throwing, so callers don't need try/catch everywhere.
    return null;
  }
}

// ---------- Cookie helpers ----------

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function getSessionUserId(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const payload = await verifySessionToken(token);
  return payload?.sub ?? null;
}

// ---------- Protected-route foundation (for Phase 10) ----------
// Phase 9 only establishes this helper. No pages use it yet —
// Phase 10's student dashboard is expected to call this at the top
// of its own server components/route handlers.
export async function requireAuth(): Promise<string> {
  const userId = await getSessionUserId();
  if (!userId) {
    throw new Error("UNAUTHENTICATED");
  }
  return userId;
}