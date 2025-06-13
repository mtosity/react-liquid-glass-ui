import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

// Icons for the stories (using simple SVG icons)
const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const CameraIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 15.2c-2.07 0-3.75-1.68-3.75-3.75s1.68-3.75 3.75-3.75 3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z" />
  </svg>
);

const FlashlightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 2h12v3H6zm4.5 16L9 16.5 7.5 18 6 16.5 4.5 18 3 16.5V6h18v10.5L19.5 18 18 16.5 16.5 18 15 16.5zm1.5-2.5V8h-4v7.5z" />
  </svg>
);

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gradient",
      values: [
        {
          name: "gradient",
          value:
            "linear-gradient(to right,rgb(139, 76, 194),rgb(103, 46, 217))",
        },
        {
          name: "dark",
          value:
            'center / cover no-repeat url("https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=4140")',
        },
        {
          name: "image",
          value:
            'center / cover no-repeat url("https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=3674")',
        },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl"],
    },
    shape: {
      control: "select",
      options: ["circle", "rounded", "pill", "square"],
    },
    pressAnimation: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    icon: <PlayIcon />,
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <Button variant="default" size="sm" icon={<PlayIcon />} />
        <span className="text-white text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="default" size="md" icon={<PlayIcon />} />
        <span className="text-white text-xs">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="default" size="lg" icon={<PlayIcon />} />
        <span className="text-white text-xs">Large</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="default" size="xl" icon={<PlayIcon />} />
        <span className="text-white text-xs">XL</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="default" size="2xl" icon={<PlayIcon />} />
        <span className="text-white text-xs">2XL</span>
      </div>
    </div>
  ),
};

// Different shapes with flexible content
export const Shapes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Button
          variant="default"
          size="md"
          shape="pill"
          label="Continue Watching"
        />
        <span className="text-white text-xs">Pill</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="default" size="md" shape="rounded" label="Watch Now" />
        <span className="text-white text-xs">Rounded</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button
          variant="default"
          size="md"
          shape="square"
          icon={<PlayIcon />}
        />
        <span className="text-white text-xs">Square</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button
          variant="default"
          size="md"
          shape="circle"
          icon={<PlayIcon />}
        />
        <span className="text-white text-xs">Circle</span>
      </div>
    </div>
  ),
};

// Flexible content demonstration
export const FlexibleContent: Story = {
  parameters: {
    backgrounds: {
      default: "image",
    },
  },
  render: () => (
    <div className="py-60">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-white text-sm font-medium">Icons Only:</span>
          <Button
            variant="default"
            size="sm"
            shape="circle"
            icon={<PlayIcon />}
          />
          <Button
            variant="default"
            size="md"
            shape="circle"
            icon={<PauseIcon />}
          />
          <Button
            variant="default"
            size="lg"
            shape="circle"
            icon={<CameraIcon />}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <span className="text-white text-sm font-medium">Labels Only:</span>
          <Button variant="default" size="sm" shape="pill" label="Play" />
          <Button
            variant="default"
            size="md"
            shape="pill"
            label="Continue Watching"
          />
          <Button
            variant="default"
            size="lg"
            shape="pill"
            label="Start Your Free Trial"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <span className="text-white text-sm font-medium">Icon + Label:</span>
          <Button
            variant="default"
            size="sm"
            shape="rounded"
            icon={<PlayIcon />}
            label="Play"
          />
          <Button
            variant="default"
            size="md"
            shape="rounded"
            icon={<CameraIcon />}
            label="Take Photo"
          />
          <Button
            variant="default"
            size="lg"
            shape="rounded"
            icon={<FlashlightIcon />}
            label="Toggle Flash"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <span className="text-white text-sm font-medium">Numbers:</span>
          <Button variant="default" size="md" shape="circle" number={5} />
          <Button variant="default" size="lg" shape="circle" number={10} />
          <Button variant="default" size="xl" shape="circle" number={15} />
        </div>
      </div>
    </div>
  ),
};

// Loading states
export const LoadingStates: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="default" size="md" loading />
      <Button
        variant="default"
        size="xl"
        shape="rounded"
        label="Loading..."
        loading
      />
      <Button variant="default" size="lg" loading />
    </div>
  ),
};

export const SmartphoneScrolling: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    layout: "fullscreen",
  },
  render: () => (
    <div className="relative w-1/2-full h-screen overflow-hidden">
      {/* Animated scrolling background */}
      <div className="absolute inset-0">
        <div
          className="relative w-full h-[400vh]"
          style={{
            animation: "scrollUp 8s ease-in-out infinite",
          }}
        >
          {/* Multiple background sections to simulate content */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-blue-900/50 to-teal-900/50"
            style={{
              backgroundImage: `
                url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3870"),
                url("https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=3870"),
                url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=3870"),
                url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3870")
              `,
              backgroundSize: "100% 25%, 100% 25%, 100% 25%, 100% 25%",
              backgroundPosition: "0% 0%, 0% 25%, 0% 50%, 0% 75%",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Overlay content sections */}
          <div className="absolute top-0 left-0 right-0 h-1/4 flex items-center justify-center">
            <div className="text-white text-4xl font-bold opacity-40">
              Mountain Range
            </div>
          </div>
          <div className="absolute top-1/4 left-0 right-0 h-1/4 flex items-center justify-center">
            <div className="text-white text-4xl font-bold opacity-40">
              Ocean Waves
            </div>
          </div>
          <div className="absolute top-2/4 left-0 right-0 h-1/4 flex items-center justify-center">
            <div className="text-white text-4xl font-bold opacity-40">
              Forest Path
            </div>
          </div>
          <div className="absolute top-3/4 left-0 right-0 h-1/4 flex items-center justify-center">
            <div className="text-white text-4xl font-bold opacity-40">
              Back to Mountains
            </div>
          </div>
        </div>
      </div>

      {/* Fixed transparent buttons */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none w-full flex justify-center">
        {/* Left flashlight button */}
        <div className="w-80 my-20 border-2 border-white p-12 rounded-xl pt-80">
          <div className="flex items-center justify-between mb-20">
            <Button
              variant="default"
              size="lg"
              number={15}
              aria-label="Rewind 15 seconds"
            />
            <Button
              variant="default"
              size="2xl"
              icon={<PauseIcon />}
              aria-label="Pause video"
            />
            <Button
              variant="default"
              size="lg"
              number={15}
              aria-label="Forward 15 seconds"
            />
          </div>
          <div className="flex justify-between">
            <Button
              variant="default"
              size="xl"
              shape="circle"
              icon={<FlashlightIcon />}
              aria-label="Toggle flashlight"
              className="bg-white/5 backdrop-blur-md hover:bg-white/10"
            />
            <Button
              variant="default"
              size="xl"
              shape="circle"
              icon={<CameraIcon />}
              aria-label="Take photo"
              className="bg-white/5 backdrop-blur-md hover:bg-white/10"
            />
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scrollUp {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-75%);
            }
          }
        `,
        }}
      />
    </div>
  ),
};
