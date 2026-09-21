import * as React from "react";
import type { SVGProps } from "react";
interface SvgCagesProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCages: ({ contrastMode, gradient, ...props }: SvgCagesProps) => React.JSX.Element;
export default SvgCages;
