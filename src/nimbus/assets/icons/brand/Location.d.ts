import * as React from "react";
import type { SVGProps } from "react";
interface SvgLocationProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgLocation: ({ contrastMode, gradient, ...props }: SvgLocationProps) => React.JSX.Element;
export default SvgLocation;
