import * as React from "react";
import type { SVGProps } from "react";
interface SvgPowerProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgPower: ({ contrastMode, gradient, ...props }: SvgPowerProps) => React.JSX.Element;
export default SvgPower;
