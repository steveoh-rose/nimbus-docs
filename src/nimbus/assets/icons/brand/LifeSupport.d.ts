import * as React from "react";
import type { SVGProps } from "react";
interface SvgLifeSupportProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgLifeSupport: ({ contrastMode, gradient, ...props }: SvgLifeSupportProps) => React.JSX.Element;
export default SvgLifeSupport;
