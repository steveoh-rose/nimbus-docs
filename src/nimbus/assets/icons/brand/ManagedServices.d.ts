import * as React from "react";
import type { SVGProps } from "react";
interface SvgManagedServicesProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgManagedServices: ({ contrastMode, gradient, ...props }: SvgManagedServicesProps) => React.JSX.Element;
export default SvgManagedServices;
