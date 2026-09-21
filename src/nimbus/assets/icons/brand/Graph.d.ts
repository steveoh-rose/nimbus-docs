import * as React from "react";
import type { SVGProps } from "react";
interface SvgGraphProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgGraph: ({ contrastMode, gradient, ...props }: SvgGraphProps) => React.JSX.Element;
export default SvgGraph;
