import React, { useEffect, useRef, useState } from "react";

// Utility functions from the original script
function smoothStep(a: number, b: number, t: number) {
  t = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function length(x: number, y: number) {
  return Math.sqrt(x * x + y * y);
}

function roundedRectSDF(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const qx = Math.abs(x) - width + radius;
  const qy = Math.abs(y) - height + radius;
  return (
    Math.min(Math.max(qx, qy), 0) +
    length(Math.max(qx, 0), Math.max(qy, 0)) -
    radius
  );
}

function texture(x: number, y: number) {
  return { type: "t", x, y };
}

function generateId() {
  return "liquid-glass-" + Math.random().toString(36).substr(2, 9);
}

interface ShaderOptions {
  fragment: (
    uv: { x: number; y: number },
    mouse: { x: number; y: number }
  ) => { x: number; y: number };
}

export function useLiquidGlass(
  targetRef: React.RefObject<HTMLElement>,
  options: ShaderOptions
) {
  const { fragment } = options;
  const [filterId, setFilterId] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const feImageRef = useRef<SVGFEImageElement | null>(null);
  const feDisplacementMapRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const mouseUsed = useRef(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const id = generateId();
    setFilterId(id);
    let animationFrameId: number;

    const init = () => {
      if (!targetRef.current) return;
      const width = targetRef.current.offsetWidth;
      const height = targetRef.current.offsetHeight;
      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(init);
        return;
      }
      const canvasDPI = 1;

      // Create canvas
      const canvas = document.createElement("canvas");
      canvas.width = width * canvasDPI;
      canvas.height = height * canvasDPI;
      canvas.style.display = "none";
      canvasRef.current = canvas;

      // Create SVG filter
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("width", "0");
      svg.setAttribute("height", "0");
      svg.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9998;
      `;
      svgRef.current = svg;

      const defs = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "defs"
      );
      const filter = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "filter"
      );
      filter.setAttribute("id", `${id}_filter`);
      filter.setAttribute("filterUnits", "userSpaceOnUse");
      filter.setAttribute("colorInterpolationFilters", "sRGB");
      filter.setAttribute("x", "0");
      filter.setAttribute("y", "0");
      filter.setAttribute("width", width.toString());
      filter.setAttribute("height", height.toString());

      const feImage = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feImage"
      );
      feImage.setAttribute("id", `${id}_map`);
      feImage.setAttribute("width", width.toString());
      feImage.setAttribute("height", height.toString());
      feImageRef.current = feImage;

      const feDisplacementMap = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "feDisplacementMap"
      );
      feDisplacementMap.setAttribute("in", "SourceGraphic");
      feDisplacementMap.setAttribute("in2", `${id}_map`);
      feDisplacementMap.setAttribute("xChannelSelector", "R");
      feDisplacementMap.setAttribute("yChannelSelector", "G");
      feDisplacementMapRef.current = feDisplacementMap;

      filter.appendChild(feImage);
      filter.appendChild(feDisplacementMap);
      defs.appendChild(filter);
      svg.appendChild(defs);

      document.body.appendChild(svg);
      updateShader();
    };

    const updateShader = () => {
      if (
        !canvasRef.current ||
        !feImageRef.current ||
        !feDisplacementMapRef.current
      )
        return;

      const context = canvasRef.current.getContext("2d");
      if (!context) return;
      const width = canvasRef.current.width;
      const height = canvasRef.current.height;
      if (width === 0 || height === 0) return;
      const canvasDPI = 1;

      const mouseProxy = new Proxy(mouse.current, {
        get: (target, prop) => {
          mouseUsed.current = true;
          return target[prop as keyof typeof target];
        },
      });

      mouseUsed.current = false;

      const w = width * canvasDPI;
      const h = height * canvasDPI;
      const data = new Uint8ClampedArray(w * h * 4);

      let maxScale = 0;
      const rawValues = [];

      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % w;
        const y = Math.floor(i / 4 / w);
        const pos = fragment({ x: x / w, y: y / h }, mouseProxy);
        const dx = pos.x * w - x;
        const dy = pos.y * h - y;
        maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
        rawValues.push(dx, dy);
      }

      maxScale *= 0.5;

      let index = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = rawValues[index++] / maxScale + 0.5;
        const g = rawValues[index++] / maxScale + 0.5;
        data[i] = r * 255;
        data[i + 1] = g * 255;
        data[i + 2] = 0;
        data[i + 3] = 255;
      }

      context.putImageData(new ImageData(data, w, h), 0, 0);
      feImageRef.current.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "href",
        canvasRef.current.toDataURL()
      );
      feDisplacementMapRef.current.setAttribute(
        "scale",
        (maxScale / canvasDPI).toString()
      );
    };

    animationFrameId = requestAnimationFrame(init);

    const handleMouseMove = (e: MouseEvent) => {
      if (!targetRef.current) return;
      const rect = targetRef.current.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;

      if (mouseUsed.current) {
        updateShader();
      }
    };

    const currentTarget = targetRef.current;
    currentTarget.addEventListener("mousemove", handleMouseMove);

    return () => {
      currentTarget.removeEventListener("mousemove", handleMouseMove);
      if (svgRef.current) {
        svgRef.current.remove();
      }
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetRef, fragment]);

  return filterId ? `${filterId}_filter` : null;
}

export const defaultFragment = (
  uv: { x: number; y: number },
  _mouse: { x: number; y: number }
) => {
  const ix = uv.x - 0.5;
  const iy = uv.y - 0.5;
  const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, 0.6);
  const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
  const scaled = smoothStep(0, 1, displacement);
  return texture(ix * scaled + 0.5, iy * scaled + 0.5);
};
