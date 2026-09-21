import * as React from "react";
import type { SVGProps } from "react";
interface SvgDatacentreProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgDatacentre: ({ contrastMode, gradient, ...props }: SvgDatacentreProps) => React.JSX.Element;
export default SvgDatacentre;
