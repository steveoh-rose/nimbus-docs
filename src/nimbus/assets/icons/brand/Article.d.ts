import * as React from "react";
import type { SVGProps } from "react";
interface SvgArticleProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgArticle: ({ contrastMode, gradient, ...props }: SvgArticleProps) => React.JSX.Element;
export default SvgArticle;
