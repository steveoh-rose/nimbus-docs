import * as React from "react";
import type { SVGProps } from "react";
interface SvgFaqProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgFaq: ({ contrastMode, gradient, ...props }: SvgFaqProps) => React.JSX.Element;
export default SvgFaq;
