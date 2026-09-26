import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  hashPassword,
  isEmailValid,
  isPasswordValid,
  normalizeEmail,
  createSessionToken,
  setSessionCookie,
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "INVALID_BODY" }, { status: 400 });
  }

  const { name, email, password, confirmPassword } = (body ?? {}) as {
    name?: unknown;
    email?: unknown;
    password?: unknown;
    confirmPassword?: unknown;
  };

  // ---- Server-side validation (never trust the client) ----
  const errors: Record<string, string> = {};

  if (typeof name !== "string" || !name.trim()) {
    errors.name = "NAME_REQUIRED";
  }
  if (typeof email !== "string" || !email.trim()) {
    errors.email = "EMAIL_REQUIRED";
  } else if (!isEmailValid(email.trim())) {
    errors.email = "EMAIL_INVALID";
  }
  if (typeof password !== "string" || !password) {
    errors.password = "PASSWORD_REQUIRED";
  } else if (!isPasswordValid(password)) {
    errors.password = "PASSWORD_TOO_SHORT";
  }
  if (typeof confirmPassword !== "string" || !confirmPassword) {
    errors.confirmPassword = "CONFIRM_REQUIRED";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "PASSWORD_MISMATCH";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "VALIDATION_ERROR", fields: errors }, {
      status: 400,
    });
  }

  const normalizedEmail = normalizeEmail(email as string);

  try {
    const existing = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: { id: true },
    });
    if (existing) {
      return NextResponse.json(
        { error: "EMAIL_TAKEN", fields: { email: "EMAIL_TAKEN" } },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password as string);

    const user = await prisma.user.create({
      data: {
        name: (name as string).trim(),
        email: normalizedEmail,
        passwordHash,
      },
      select: { id: true, name: true, email: true },
    });

    const token = await createSessionToken(user.id);
    await setSessionCookie(token);

    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    console.error("Registration failed:", err);
    return NextResponse.json({ error: "SERVER_ERROR" }, { status: 500 });
  }
}