import * as React from "react";
import type { SVGProps } from "react";
interface SvgServicesProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgServices: ({ contrastMode, gradient, ...props }: SvgServicesProps) => React.JSX.Element;
export default SvgServices;
