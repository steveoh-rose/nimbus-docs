import * as React from "react";
import type { SVGProps } from "react";
interface SvgBarsProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgBars: ({ contrastMode, gradient, ...props }: SvgBarsProps) => React.JSX.Element;
export default SvgBars;
