import * as React from "react";
import type { SVGProps } from "react";
interface SvgBandwidthProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgBandwidth: ({ contrastMode, gradient, ...props }: SvgBandwidthProps) => React.JSX.Element;
export default SvgBandwidth;
