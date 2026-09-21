import * as React from "react";
import type { SVGProps } from "react";
interface SvgPortsProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgPorts: ({ contrastMode, gradient, ...props }: SvgPortsProps) => React.JSX.Element;
export default SvgPorts;
