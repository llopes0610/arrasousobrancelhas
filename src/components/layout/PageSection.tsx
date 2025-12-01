import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export default function PageSection({ children, className }: PageSectionProps) {
  return (
    <section className={cn("section-container section-padding", className)}>
      {children}
    </section>
  );
}