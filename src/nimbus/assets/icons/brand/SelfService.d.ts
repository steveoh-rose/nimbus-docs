import * as React from "react";
import type { SVGProps } from "react";
interface SvgSelfServiceProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgSelfService: ({ contrastMode, gradient, ...props }: SvgSelfServiceProps) => React.JSX.Element;
export default SvgSelfService;
