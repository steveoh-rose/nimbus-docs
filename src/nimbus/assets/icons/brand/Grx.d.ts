import * as React from "react";
import type { SVGProps } from "react";
interface SvgGrxProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgGrx: ({ contrastMode, gradient, ...props }: SvgGrxProps) => React.JSX.Element;
export default SvgGrx;
