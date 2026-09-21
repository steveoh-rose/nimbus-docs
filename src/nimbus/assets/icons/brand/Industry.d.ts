import * as React from "react";
import type { SVGProps } from "react";
interface SvgIndustryProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgIndustry: ({ contrastMode, gradient, ...props }: SvgIndustryProps) => React.JSX.Element;
export default SvgIndustry;
