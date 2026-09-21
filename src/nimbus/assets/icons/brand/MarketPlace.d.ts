import * as React from "react";
import type { SVGProps } from "react";
interface SvgMarketPlaceProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgMarketPlace: ({ contrastMode, gradient, ...props }: SvgMarketPlaceProps) => React.JSX.Element;
export default SvgMarketPlace;
