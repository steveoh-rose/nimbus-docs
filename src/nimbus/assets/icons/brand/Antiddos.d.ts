import * as React from "react";
import type { SVGProps } from "react";
interface SvgAntiddosProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgAntiddos: ({ contrastMode, gradient, ...props }: SvgAntiddosProps) => React.JSX.Element;
export default SvgAntiddos;
