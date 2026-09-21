import * as React from "react";
import type { SVGProps } from "react";
interface SvgBrandPartnershipProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgBrandPartnership: ({ contrastMode, gradient, ...props }: SvgBrandPartnershipProps) => React.JSX.Element;
export default SvgBrandPartnership;
