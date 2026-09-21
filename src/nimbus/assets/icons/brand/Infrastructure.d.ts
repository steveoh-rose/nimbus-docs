import * as React from "react";
import type { SVGProps } from "react";
interface SvgInfrastructureProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgInfrastructure: ({ contrastMode, gradient, ...props }: SvgInfrastructureProps) => React.JSX.Element;
export default SvgInfrastructure;
