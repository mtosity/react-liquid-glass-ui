import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { useLiquidGlass, defaultFragment } from "../../lib/use-liquid-glass";

const cardVariants = cva(
  [
    "rounded-2xl",
    "text-white",
    "shadow-md backdrop-blur-sm",
    // Base shadow from Button
    "shadow-[inset_0.5px_0.5px_1px_rgba(255,255,255,0.5),inset_0_0.5px_1px_rgba(255,255,255,0.4),inset_0.5px_0_1px_rgba(255,255,255,0.35),inset_-0.5px_-0.5px_1px_rgba(255,255,255,0.3),inset_0_-0.5px_1px_rgba(0,0,0,0.15),inset_-0.5px_0_1px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.2)]",
    // Hover effect from Button
    "transition-all duration-300 ease-out",
    "hover:shadow-[inset_0.5px_0.5px_1px_rgba(255,255,255,0.6),inset_0_0.5px_1px_rgba(255,255,255,0.5),inset_0.5px_0_1px_rgba(255,255,255,0.4),inset_-0.5px_-0.5px_1px_rgba(255,255,255,0.35),inset_0_-0.5px_1px_rgba(0,0,0,0.2),inset_-0.5px_0_1px_rgba(0,0,0,0.2),0_1px_4px_rgba(0,0,0,0.3)]",
  ],
  {
    variants: {
      variant: {
        default: "bg-white/10",
        frosted: "bg-white/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, children, ...props }, ref) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const filterId = useLiquidGlass(cardRef, { fragment: defaultFragment });

    return (
      <div
        className={cn(cardVariants({ variant }), className)}
        style={{
          backdropFilter: `url(#${filterId}) blur(16px) saturate(1.2)`,
        }}
        ref={(node: HTMLDivElement) => {
          (cardRef as React.MutableRefObject<HTMLDivElement | null>).current =
            node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card, cardVariants };
