import * as React from "react";
import type { SVGProps } from "react";
interface SvgIdeaProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgIdea: ({ contrastMode, gradient, ...props }: SvgIdeaProps) => React.JSX.Element;
export default SvgIdea;
