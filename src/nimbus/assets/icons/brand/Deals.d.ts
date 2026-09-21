import * as React from "react";
import type { SVGProps } from "react";
interface SvgDealsProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgDeals: ({ contrastMode, gradient, ...props }: SvgDealsProps) => React.JSX.Element;
export default SvgDeals;
