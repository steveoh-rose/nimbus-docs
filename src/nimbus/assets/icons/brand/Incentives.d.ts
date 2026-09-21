import * as React from "react";
import type { SVGProps } from "react";
interface SvgIncentivesProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgIncentives: ({ contrastMode, gradient, ...props }: SvgIncentivesProps) => React.JSX.Element;
export default SvgIncentives;
