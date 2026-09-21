import * as React from "react";
import type { SVGProps } from "react";
interface SvgSpeedProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgSpeed: ({ contrastMode, gradient, ...props }: SvgSpeedProps) => React.JSX.Element;
export default SvgSpeed;
