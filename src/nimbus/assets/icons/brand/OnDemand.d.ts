import * as React from "react";
import type { SVGProps } from "react";
interface SvgOnDemandProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgOnDemand: ({ contrastMode, gradient, ...props }: SvgOnDemandProps) => React.JSX.Element;
export default SvgOnDemand;
