import { TriLingualText } from "@/lessons/types";

export default function TriText({
  text,
  size = "base",
}: {
  text: TriLingualText;
  size?: "base" | "sm";
}) {
  const finnishSize = size === "sm" ? "text-[0.95rem]" : "text-[1.05rem]";
  const otherSize = size === "sm" ? "text-[0.85rem]" : "text-[0.92rem]";

  return (
    <div className="space-y-1">
      <p className={`${finnishSize} text-spruce-dark font-medium mb-0`}>
        {text.fi}
      </p>
      {text.bn && (
        <p className={`${otherSize} text-ink/80 mb-0`}>{text.bn}</p>
      )}
      <p className={`${otherSize} text-ink/60 italic mb-0`}>{text.en}</p>
    </div>
  );
}