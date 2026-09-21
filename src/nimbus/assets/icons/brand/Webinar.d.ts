import * as React from "react";
import type { SVGProps } from "react";
interface SvgWebinarProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgWebinar: ({ contrastMode, gradient, ...props }: SvgWebinarProps) => React.JSX.Element;
export default SvgWebinar;
