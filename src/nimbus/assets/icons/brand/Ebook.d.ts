import * as React from "react";
import type { SVGProps } from "react";
interface SvgEbookProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgEbook: ({ contrastMode, gradient, ...props }: SvgEbookProps) => React.JSX.Element;
export default SvgEbook;
