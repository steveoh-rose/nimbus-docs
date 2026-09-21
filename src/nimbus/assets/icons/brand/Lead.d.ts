import * as React from "react";
import type { SVGProps } from "react";
interface SvgLeadProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgLead: ({ contrastMode, gradient, ...props }: SvgLeadProps) => React.JSX.Element;
export default SvgLead;
