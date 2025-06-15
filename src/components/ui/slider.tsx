import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { useLiquidGlass, defaultFragment } from "../../lib/use-liquid-glass";

const sliderVariants = cva(
  ["relative flex w-full touch-none select-none items-center", "group"],
  {
    variants: {
      size: {
        sm: "h-4",
        md: "h-6",
        lg: "h-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const trackVariants = cva(
  [
    "relative h-2 w-full grow overflow-hidden rounded-full",
    "bg-white/10 backdrop-blur-sm",
    "shadow-[inset_0_1px_2px_rgba(0,0,0,0.3),inset_0_-1px_1px_rgba(255,255,255,0.1)]",
  ],
  {
    variants: {
      size: {
        sm: "h-1.5",
        md: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const rangeVariants = cva([
  "absolute h-full rounded-full",
  "bg-gradient-to-r from-blue-500 to-blue-600",
  "shadow-[0_0_8px_rgba(59,130,246,0.5)]",
  "backdrop-blur-xs",
]);

const thumbVariants = cva(
  [
    "block rounded-full shadow-lg outline-none",
    // Glass magnifying effect - completely transparent, no background color
    // "backdrop-blur-[0.5px]",
    "transition-all duration-300 ease-out",
    // "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:ring-offset-1",
    "focus-visible:backdrop-blur:sm",

    // Glowing white gradient border - same as button
    "shadow-[inset_0.5px_0.5px_1px_rgba(255,255,255,0.5),inset_0_0.5px_1px_rgba(255,255,255,0.4),inset_0.5px_0_1px_rgba(255,255,255,0.35),inset_-0.5px_-0.5px_1px_rgba(255,255,255,0.3),inset_0_-0.5px_1px_rgba(0,0,0,0.15),inset_-0.5px_0_1px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.2)]",
    // Liquid drop effect base
    "relative overflow-hidden cursor-grab active:cursor-grabbing",
    "data-[disabled]:cursor-not-allowed",
    "before:absolute before:inset-0 before:rounded-full",
    "before:bg-gradient-to-br before:from-white/[0.01] before:to-transparent",
    "before:transition-all before:duration-300 before:ease-out",
    // Base liquid animation - gentle pulsing
    "animate-liquidPulse",
    // Hover effect - enhanced glass and liquid movement
    "hover:scale-110",
    "hover:backdrop-blur-xs",
    "hover:shadow-[inset_0.5px_0.5px_1px_rgba(255,255,255,0.6),inset_0_0.5px_1px_rgba(255,255,255,0.5),inset_0.5px_0_1px_rgba(255,255,255,0.4),inset_-0.5px_-0.5px_1px_rgba(255,255,255,0.35),inset_0_-0.5px_1px_rgba(0,0,0,0.2),inset_-0.5px_0_1px_rgba(0,0,0,0.2),0_1px_4px_rgba(0,0,0,0.3)]",
    "hover:before:from-white/[0.02] hover:before:to-transparent",
    "hover:animate-liquidStretch",
    "data-[disabled]:animate-none",
    // Active/dragging effect - maximum glass magnification and liquid deformation
    "data-[state=dragging]:scale-105",
    "data-[state=dragging]:shadow-[inset_0.5px_0.5px_1px_rgba(255,255,255,0.7),inset_0_0.5px_1px_rgba(255,255,255,0.6),inset_0.5px_0_1px_rgba(255,255,255,0.5),inset_-0.5px_-0.5px_1px_rgba(255,255,255,0.4),inset_0_-0.5px_1px_rgba(0,0,0,0.25),inset_-0.5px_0_1px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.4)]",
    "data-[state=dragging]:before:from-white/[0.03] data-[state=dragging]:before:to-transparent",
    "data-[state=dragging]:animate-liquidDrag",
  ],
  {
    variants: {
      size: {
        sm: "h-4 w-6", // wider than tall
        md: "h-5 w-8", // wider than tall
        lg: "h-6 w-10", // wider than tall
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  /**
   * Show value label
   */
  showValue?: boolean;
  /**
   * Custom value formatter
   */
  formatValue?: (value: number) => string;
}

/**
 * Liquid Glass Slider Component
 *
 * A modern slider with a liquid water drop knob that deforms fluidly when dragging.
 * Features glassmorphic styling consistent with the design system.
 *
 * @example
 * ```tsx
 * // Basic slider
 * <Slider defaultValue={[50]} max={100} step={1} />
 *
 * // With value display
 * <Slider defaultValue={[75]} showValue max={100} step={5} />
 *
 * // Large size with custom formatting
 * <Slider
 *   defaultValue={[0.5]}
 *   max={1}
 *   step={0.1}
 *   size="lg"
 *   showValue
 *   formatValue={(val) => `${Math.round(val * 100)}%`}
 * />
 * ```
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, size, showValue = false, formatValue, ...props }, ref) => {
  const [value, setValue] = React.useState(
    props.defaultValue || props.value || [0]
  );
  const [isDragging, setIsDragging] = React.useState(false);
  const thumbRef = React.useRef<HTMLSpanElement>(null);
  const filterId = useLiquidGlass(thumbRef, { fragment: defaultFragment });

  const handleValueChange = (newValue: number[]) => {
    setValue(newValue);
    props.onValueChange?.(newValue);
  };

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const displayValue = formatValue
    ? formatValue(value[0])
    : value[0].toString();

  return (
    <div className="w-full min-w-12">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(sliderVariants({ size }), className)}
        onValueChange={handleValueChange}
        {...props}
      >
        <SliderPrimitive.Track className={cn(trackVariants({ size }))}>
          <SliderPrimitive.Range className={cn(rangeVariants())} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          ref={thumbRef}
          className={cn(thumbVariants({ size }), "bg-white/5")}
          aria-label="Slider thumb"
          data-state={isDragging ? "dragging" : "idle"}
          data-disabled={props.disabled}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={
            filterId
              ? {
                  backdropFilter: `url(#${filterId}) blur(2px) saturate(1.2)`,
                }
              : {}
          }
        />
      </SliderPrimitive.Root>
      {showValue && (
        <div className="mt-2 text-center">
          <span className="text-sm text-white/70 font-medium">
            {displayValue}
          </span>
        </div>
      )}
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
