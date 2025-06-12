import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1Glass: [
        "text-6xl font-extrabold tracking-tight lg:text-7xl xl:text-8xl",
        "text-transparent bg-clip-text",
        "bg-gradient-to-br from-white/60 via-white/25 to-white/10",
        "drop-shadow-[0_0_1px_rgba(255,255,255,1)]",
        "drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]",
        "drop-shadow-[1px_0_2px_rgba(255,255,255,0.6)]",
        "drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]",
        "drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
        "[-webkit-text-stroke:0.8px_rgba(255,255,255,0.4)]",
        "backdrop-blur-[1px]",
        "relative",
        "before:content-[attr(data-text)] before:absolute before:inset-0",
        "before:text-transparent before:bg-clip-text",
        "before:bg-gradient-to-tr before:from-white/40 before:via-white/15 before:to-white/5",
        "before:[-webkit-text-stroke:0.5px_rgba(255,255,255,0.6)]",
        "before:drop-shadow-[0_0_3px_rgba(255,255,255,0.7)]",
        "before:drop-shadow-[1px_1px_2px_rgba(255,255,255,0.5)]",
        "before:-z-10",
      ],
      h2Glass: [
        "text-5xl font-semibold tracking-tight lg:text-6xl xl:text-7xl",
        "text-transparent bg-clip-text",
        "bg-gradient-to-br from-white/60 via-white/25 to-white/10",
        "drop-shadow-[0_0_1px_rgba(255,255,255,1)]",
        "drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]",
        "drop-shadow-[1px_0_2px_rgba(255,255,255,0.6)]",
        "drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]",
        "drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
        "[-webkit-text-stroke:0.7px_rgba(255,255,255,0.4)]",
        "backdrop-blur-[1px]",
        "relative",
        "before:content-[attr(data-text)] before:absolute before:inset-0",
        "before:text-transparent before:bg-clip-text",
        "before:bg-gradient-to-tr before:from-white/40 before:via-white/15 before:to-white/5",
        "before:[-webkit-text-stroke:0.4px_rgba(255,255,255,0.6)]",
        "before:drop-shadow-[0_0_3px_rgba(255,255,255,0.7)]",
        "before:drop-shadow-[1px_1px_2px_rgba(255,255,255,0.5)]",
        "before:-z-10",
      ],
      h3Glass: [
        "text-4xl font-semibold tracking-tight lg:text-5xl xl:text-6xl",
        "text-transparent bg-clip-text",
        "bg-gradient-to-br from-white/60 via-white/25 to-white/10",
        "drop-shadow-[0_0_1px_rgba(255,255,255,1)]",
        "drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]",
        "drop-shadow-[1px_0_2px_rgba(255,255,255,0.6)]",
        "drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]",
        "drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)]",
        "[-webkit-text-stroke:0.6px_rgba(255,255,255,0.4)]",
        "backdrop-blur-[1px]",
        "relative",
        "before:content-[attr(data-text)] before:absolute before:inset-0",
        "before:text-transparent before:bg-clip-text",
        "before:bg-gradient-to-tr before:from-white/40 before:via-white/15 before:to-white/5",
        "before:[-webkit-text-stroke:0.3px_rgba(255,255,255,0.6)]",
        "before:drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]",
        "before:drop-shadow-[1px_1px_1px_rgba(255,255,255,0.5)]",
        "before:-z-10",
      ],
      h4Glass: [
        "text-3xl font-semibold tracking-tight lg:text-4xl xl:text-5xl",
        "text-transparent bg-clip-text",
        "bg-gradient-to-br from-white/60 via-white/25 to-white/10",
        "drop-shadow-[0_0_1px_rgba(255,255,255,1)]",
        "drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]",
        "drop-shadow-[1px_0_1px_rgba(255,255,255,0.6)]",
        "drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]",
        "drop-shadow-[0_1px_3px_rgba(0,0,0,0.1)]",
        "[-webkit-text-stroke:0.5px_rgba(255,255,255,0.4)]",
        "backdrop-blur-[1px]",
        "relative",
        "before:content-[attr(data-text)] before:absolute before:inset-0",
        "before:text-transparent before:bg-clip-text",
        "before:bg-gradient-to-tr before:from-white/40 before:via-white/15 before:to-white/5",
        "before:[-webkit-text-stroke:0.3px_rgba(255,255,255,0.6)]",
        "before:drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]",
        "before:drop-shadow-[1px_1px_1px_rgba(255,255,255,0.5)]",
        "before:-z-10",
      ],
      h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      body: "text-base",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, children, ...props }, ref) => {
    const Comp =
      as ||
      (variant === "p"
        ? "p"
        : variant === "body"
        ? "p"
        : variant === "small"
        ? "span"
        : variant === "muted"
        ? "p"
        : variant === "h1" || variant === "h1Glass"
        ? "h1"
        : variant === "h2" || variant === "h2Glass"
        ? "h2"
        : variant === "h3" || variant === "h3Glass"
        ? "h3"
        : variant === "h4" || variant === "h4Glass"
        ? "h4"
        : "p");

    const isGlassVariant = variant?.includes("Glass");
    const textContent = typeof children === "string" ? children : "";

    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...(isGlassVariant && { "data-text": textContent })}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
