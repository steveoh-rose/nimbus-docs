import * as React from "react";
import type { SVGProps } from "react";
interface SvgComputeProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCompute: ({ contrastMode, gradient, ...props }: SvgComputeProps) => React.JSX.Element;
export default SvgCompute;
