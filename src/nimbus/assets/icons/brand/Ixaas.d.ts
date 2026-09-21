import * as React from "react";
import type { SVGProps } from "react";
interface SvgIxaasProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgIxaas: ({ contrastMode, gradient, ...props }: SvgIxaasProps) => React.JSX.Element;
export default SvgIxaas;
