import * as React from "react";
import type { SVGProps } from "react";
interface SvgPartnershipProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgPartnership: ({ contrastMode, gradient, ...props }: SvgPartnershipProps) => React.JSX.Element;
export default SvgPartnership;
