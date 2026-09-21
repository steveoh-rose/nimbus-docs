import * as React from "react";
import type { SVGProps } from "react";
interface SvgIxProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgIx: ({ contrastMode, gradient, ...props }: SvgIxProps) => React.JSX.Element;
export default SvgIx;
