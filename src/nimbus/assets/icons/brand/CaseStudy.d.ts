import * as React from "react";
import type { SVGProps } from "react";
interface SvgCaseStudyProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCaseStudy: ({ contrastMode, gradient, ...props }: SvgCaseStudyProps) => React.JSX.Element;
export default SvgCaseStudy;
