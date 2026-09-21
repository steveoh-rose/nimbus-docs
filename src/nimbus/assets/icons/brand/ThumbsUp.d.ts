import * as React from "react";
import type { SVGProps } from "react";
interface SvgThumbsUpProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgThumbsUp: ({ contrastMode, gradient, ...props }: SvgThumbsUpProps) => React.JSX.Element;
export default SvgThumbsUp;
