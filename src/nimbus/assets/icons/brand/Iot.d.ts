import * as React from "react";
import type { SVGProps } from "react";
interface SvgIotProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgIot: ({ contrastMode, gradient, ...props }: SvgIotProps) => React.JSX.Element;
export default SvgIot;
