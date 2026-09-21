import * as React from "react";
import type { SVGProps } from "react";
interface SvgNewsProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgNews: ({ contrastMode, gradient, ...props }: SvgNewsProps) => React.JSX.Element;
export default SvgNews;
