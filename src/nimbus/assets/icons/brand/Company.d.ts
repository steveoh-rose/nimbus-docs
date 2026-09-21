import * as React from "react";
import type { SVGProps } from "react";
interface SvgCompanyProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCompany: ({ contrastMode, gradient, ...props }: SvgCompanyProps) => React.JSX.Element;
export default SvgCompany;
