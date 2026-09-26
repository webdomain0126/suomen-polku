import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-snow border border-line rounded-[4px] p-6">
      {children}
    </div>
  );
}