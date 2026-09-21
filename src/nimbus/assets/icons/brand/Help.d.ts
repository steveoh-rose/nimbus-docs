import * as React from "react";
import type { SVGProps } from "react";
interface SvgHelpProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgHelp: ({ contrastMode, gradient, ...props }: SvgHelpProps) => React.JSX.Element;
export default SvgHelp;
