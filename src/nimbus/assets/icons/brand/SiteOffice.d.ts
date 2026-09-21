import * as React from "react";
import type { SVGProps } from "react";
interface SvgSiteOfficeProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgSiteOffice: ({ contrastMode, gradient, ...props }: SvgSiteOfficeProps) => React.JSX.Element;
export default SvgSiteOffice;
