import * as React from "react";
import type { SVGProps } from "react";
interface SvgLogisticsProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgLogistics: ({ contrastMode, gradient, ...props }: SvgLogisticsProps) => React.JSX.Element;
export default SvgLogistics;
