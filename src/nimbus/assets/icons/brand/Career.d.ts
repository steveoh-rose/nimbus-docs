import * as React from "react";
import type { SVGProps } from "react";
interface SvgCareerProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCareer: ({ contrastMode, gradient, ...props }: SvgCareerProps) => React.JSX.Element;
export default SvgCareer;
