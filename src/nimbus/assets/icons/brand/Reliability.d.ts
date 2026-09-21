import * as React from "react";
import type { SVGProps } from "react";
interface SvgReliabilityProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgReliability: ({ contrastMode, gradient, ...props }: SvgReliabilityProps) => React.JSX.Element;
export default SvgReliability;
