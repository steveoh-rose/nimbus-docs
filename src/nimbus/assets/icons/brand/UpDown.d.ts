import * as React from "react";
import type { SVGProps } from "react";
interface SvgUpDownProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgUpDown: ({ contrastMode, gradient, ...props }: SvgUpDownProps) => React.JSX.Element;
export default SvgUpDown;
