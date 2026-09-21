import * as React from "react";
import type { SVGProps } from "react";
interface SvgHeartProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgHeart: ({ contrastMode, gradient, ...props }: SvgHeartProps) => React.JSX.Element;
export default SvgHeart;
