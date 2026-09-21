import * as React from "react";
import type { SVGProps } from "react";
interface SvgReportProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgReport: ({ contrastMode, gradient, ...props }: SvgReportProps) => React.JSX.Element;
export default SvgReport;
