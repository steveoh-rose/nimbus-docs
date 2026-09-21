import * as React from "react";
import type { SVGProps } from "react";
interface SvgMobileProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgMobile: ({ contrastMode, gradient, ...props }: SvgMobileProps) => React.JSX.Element;
export default SvgMobile;
