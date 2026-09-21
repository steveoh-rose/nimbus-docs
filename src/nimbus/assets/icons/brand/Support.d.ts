import * as React from "react";
import type { SVGProps } from "react";
interface SvgSupportProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgSupport: ({ contrastMode, gradient, ...props }: SvgSupportProps) => React.JSX.Element;
export default SvgSupport;
