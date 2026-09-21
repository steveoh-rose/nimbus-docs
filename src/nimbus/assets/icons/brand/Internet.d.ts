import * as React from "react";
import type { SVGProps } from "react";
interface SvgInternetProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgInternet: ({ contrastMode, gradient, ...props }: SvgInternetProps) => React.JSX.Element;
export default SvgInternet;
