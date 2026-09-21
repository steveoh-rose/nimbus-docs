import * as React from "react";
import type { SVGProps } from "react";
interface SvgOrderProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgOrder: ({ contrastMode, gradient, ...props }: SvgOrderProps) => React.JSX.Element;
export default SvgOrder;
