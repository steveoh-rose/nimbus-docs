import * as React from "react";
import type { SVGProps } from "react";
interface SvgRemoteServiceProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgRemoteService: ({ contrastMode, gradient, ...props }: SvgRemoteServiceProps) => React.JSX.Element;
export default SvgRemoteService;
