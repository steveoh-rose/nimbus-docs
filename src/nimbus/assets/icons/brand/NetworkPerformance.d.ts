import * as React from "react";
import type { SVGProps } from "react";
interface SvgNetworkPerformanceProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgNetworkPerformance: ({ contrastMode, gradient, ...props }: SvgNetworkPerformanceProps) => React.JSX.Element;
export default SvgNetworkPerformance;
