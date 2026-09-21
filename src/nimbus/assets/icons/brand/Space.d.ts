import * as React from "react";
import type { SVGProps } from "react";
interface SvgSpaceProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgSpace: ({ contrastMode, gradient, ...props }: SvgSpaceProps) => React.JSX.Element;
export default SvgSpace;
