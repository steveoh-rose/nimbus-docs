import * as React from "react";
import type { SVGProps } from "react";
interface SvgSaasProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgSaas: ({ contrastMode, gradient, ...props }: SvgSaasProps) => React.JSX.Element;
export default SvgSaas;
