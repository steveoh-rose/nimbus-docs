import * as React from "react";
import type { SVGProps } from "react";
interface SvgPerformanceProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgPerformance: ({ contrastMode, gradient, ...props }: SvgPerformanceProps) => React.JSX.Element;
export default SvgPerformance;
