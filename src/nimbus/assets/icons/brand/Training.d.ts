import * as React from "react";
import type { SVGProps } from "react";
interface SvgTrainingProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgTraining: ({ contrastMode, gradient, ...props }: SvgTrainingProps) => React.JSX.Element;
export default SvgTraining;
