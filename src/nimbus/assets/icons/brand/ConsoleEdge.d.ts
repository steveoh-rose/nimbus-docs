import * as React from "react";
import type { SVGProps } from "react";
interface SvgConsoleEdgeProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgConsoleEdge: ({ contrastMode, gradient, ...props }: SvgConsoleEdgeProps) => React.JSX.Element;
export default SvgConsoleEdge;
