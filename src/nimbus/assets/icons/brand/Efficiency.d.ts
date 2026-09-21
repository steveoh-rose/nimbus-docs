import * as React from "react";
import type { SVGProps } from "react";
interface SvgEfficiencyProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgEfficiency: ({ contrastMode, gradient, ...props }: SvgEfficiencyProps) => React.JSX.Element;
export default SvgEfficiency;
