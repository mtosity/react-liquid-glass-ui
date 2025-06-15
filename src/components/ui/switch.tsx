import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { useLiquidGlass, defaultFragment } from "../../lib/use-liquid-glass";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  /**
   * Size variant of the switch
   */
  size?: "sm" | "md" | "lg";
}

/**
 * iPhone-style Switch Component
 *
 * A beautiful, animated toggle switch inspired by iOS design.
 * Features a glass-like knob transition with opacity, blur, and gradient borders.
 *
 * @example
 * ```tsx
 * // Basic switch
 * <Switch defaultChecked />
 *
 * // Controlled switch
 * <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
 *
 * // Different sizes
 * <Switch size="sm" />
 * <Switch size="md" />
 * <Switch size="lg" />
 * ```
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, size = "md", ...props }, ref) => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = React.useState(false);
  const glassThumbRef = React.useRef<HTMLDivElement>(null);
  const filterId = useLiquidGlass(glassThumbRef, { fragment: defaultFragment });

  const sizeVariants = {
    sm: {
      root: "h-5 w-11",
      thumb: "h-4 w-4",
      translateX: 24,
      glassThumb: "rounded-[6px]",
    },
    md: {
      root: "h-7 w-14",
      thumb: "h-6 w-6",
      translateX: 28,
      glassThumb: "rounded-[10px]",
    },
    lg: {
      root: "h-9 w-20",
      thumb: "h-8 w-8",
      translateX: 44,
      glassThumb: "rounded-[14px]",
    },
  };

  const currentSize = sizeVariants[size];
  const isChecked = props.checked || props.defaultChecked || false;

  const handleAnimation = async (checked: boolean) => {
    setIsAnimating(true);

    // Animate to glass
    await controls.start({
      scaleX: 1.6,
      scaleY: 1.4,
      transition: { duration: 0.5 },
    });

    // Move and keep glass effect
    await controls.start({
      x: checked ? currentSize.translateX : 0,
      transition: { type: "tween", stiffness: 400, damping: 30, duration: 0.2 },
    });

    // Revert to solid and normal size
    await controls.start({
      scaleX: 1,
      scaleY: 1,
      transition: { duration: 0.2, ease: "easeIn" },
    });

    setIsAnimating(false);
  };

  const handleCheckedChange = async (checked: boolean) => {
    if (isAnimating) return;

    handleAnimation(checked);
    props.onCheckedChange?.(checked);
  };

  const glassShadow =
    "shadow-[inset_0.5px_0.5px_1px_rgba(255,255,255,0.6),inset_0_0.5px_1px_rgba(255,255,255,0.5),inset_0.5px_0_1px_rgba(255,255,255,0.4),inset_-0.5px_-0.5px_1px_rgba(255,255,255,0.35),inset_0_-0.5px_1px_rgba(0,0,0,0.2),inset_-0.5px_0_1px_rgba(0,0,0,0.2),0_1px_4px_rgba(0,0,0,0.3)]";

  return (
    <SwitchPrimitives.Root
      className={cn(
        // Base styles
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "focus-visible:ring-green-500 focus-visible:ring-offset-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Background colors
        isChecked ? "bg-green-500" : "bg-gray-200",
        // Smooth color transition
        "transition-colors duration-300 ease-in-out",
        // Shadow for depth
        "shadow-inner",
        currentSize.root,
        className
      )}
      {...props}
      onCheckedChange={handleCheckedChange}
      ref={ref}
    >
      <SwitchPrimitives.Thumb asChild>
        <motion.div
          className={cn(
            "pointer-events-none block rounded-full",
            currentSize.thumb
          )}
          initial={{ x: isChecked ? currentSize.translateX : 0 }}
          animate={controls}
        >
          <AnimatePresence initial={false} mode="wait">
            {isAnimating ? (
              <motion.div
                key="glass"
                ref={glassThumbRef}
                className={cn(
                  "h-full w-full bg-white/20 backdrop-blur-sm",
                  currentSize.glassThumb,
                  glassShadow
                )}
                style={
                  filterId
                    ? {
                        backdropFilter: `url(#${filterId}) blur(2px) saturate(1.2)`,
                      }
                    : {}
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              />
            ) : (
              <motion.div
                key="solid"
                className="h-full w-full rounded-full bg-white shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
