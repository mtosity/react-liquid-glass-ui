import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  [
    // Base styles for all buttons
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium transition-all duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "text-white",
    "shadow-md backdrop-blur-sm",
    // Gradient border - thinner (0.5px) and blurry, bright white on top-left, top, left, bottom-right; dark on right, bottom
    "shadow-[inset_0.5px_0.5px_1px_rgba(255,255,255,0.5),inset_0_0.5px_1px_rgba(255,255,255,0.4),inset_0.5px_0_1px_rgba(255,255,255,0.35),inset_-0.5px_-0.5px_1px_rgba(255,255,255,0.3),inset_0_-0.5px_1px_rgba(0,0,0,0.15),inset_-0.5px_0_1px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.2)]",
    // Enhanced bouncy animation - smoother transition with bounce timing
    "transform-gpu transition-transform duration-300 ease-out",
    // Focus styles
    // "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-white/5 hover:bg-white/10",
          // Enhanced gradient border on hover with stronger contrast - thinner and blurry
          "hover:shadow-[inset_0.5px_0.5px_1px_rgba(255,255,255,0.6),inset_0_0.5px_1px_rgba(255,255,255,0.5),inset_0.5px_0_1px_rgba(255,255,255,0.4),inset_-0.5px_-0.5px_1px_rgba(255,255,255,0.35),inset_0_-0.5px_1px_rgba(0,0,0,0.2),inset_-0.5px_0_1px_rgba(0,0,0,0.2),0_1px_4px_rgba(0,0,0,0.3)]",
        ],
      },
      size: {
        sm: "min-h-8 px-3 py-2 text-xs gap-1.5",
        md: "min-h-10 px-4 py-2.5 text-sm gap-2",
        lg: "min-h-12 px-5 py-3 text-base gap-2",
        xl: "min-h-14 px-6 py-3.5 text-lg gap-2.5",
        "2xl": "min-h-16 px-7 py-4 text-xl gap-3",
      },
      shape: {
        circle: "rounded-full aspect-square p-0",
        rounded: "rounded-xl",
        pill: "rounded-full",
        square: "rounded-lg aspect-square p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "circle",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render as a different element type
   */
  asChild?: boolean;

  /**
   * Button label text
   */
  label?: string;

  /**
   * Icon element to display
   */
  icon?: React.ReactNode;

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Number to display (for skip controls)
   */
  number?: number;

  /**
   * Enable subtle scale animation on press
   */
  pressAnimation?: boolean;
}

/**
 * Liquid Glass Button Component
 *
 * Apple-inspired glassmorphic button with heavy backdrop blur and semi-transparent backgrounds.
 * Perfect for media controls, overlays, and modern interfaces.
 *
 * @example
 * ```tsx
 * // Circular media control button
 * <Button variant="default" size="lg" icon={<PlayIcon />} />
 *
 * // Skip control with number
 * <Button variant="default" size="md" number={10} />
 *
 * // Rounded button with label
 * <Button variant="default" size="md" shape="rounded" label="Continue Watching" />
 *
 * // Pill-shaped selection button
 * <Button variant="default" size="md" shape="pill" label="Select" />
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      asChild = false,
      label,
      icon,
      number,
      loading = false,
      pressAnimation = true,
      disabled,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Determine if this is a square/circle shape that needs equal dimensions
    const isSquareShape = shape === "circle" || shape === "square";

    // Size mapping for square shapes to maintain proper proportions
    const squareSizeMap = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-14 h-14",
      "2xl": "w-16 h-16",
    };

    // Loading spinner
    const loadingSpinner = (
      <div className="w-4 h-4">
        <div className="w-full h-full border-2 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );

    // Skip control number with circular arrow
    const skipControl = number && (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-1">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white/90"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M12 7v5l4 2" />
          </svg>
        </div>
        <span className="text-sm font-bold leading-none">{number}</span>
      </div>
    );

    // Determine content based on props
    const content = children || (
      <>
        {loading && loadingSpinner}
        {!loading && number && skipControl}
        {!loading && !number && icon && icon}
        {label && (
          <span className="font-medium tracking-tight whitespace-nowrap">
            {label}
          </span>
        )}
      </>
    );

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, shape }),
          // Apply fixed dimensions for square shapes
          isSquareShape && size && squareSizeMap[size],
          pressAnimation &&
            "active:scale-95 active:rotate-1 hover:scale-105 transition-all duration-150 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
