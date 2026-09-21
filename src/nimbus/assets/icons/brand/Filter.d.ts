import * as React from "react";
import type { SVGProps } from "react";
interface SvgFilterProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgFilter: ({ contrastMode, gradient, ...props }: SvgFilterProps) => React.JSX.Element;
export default SvgFilter;
