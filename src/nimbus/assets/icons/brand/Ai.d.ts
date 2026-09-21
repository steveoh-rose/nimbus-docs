import * as React from "react";
import type { SVGProps } from "react";
interface SvgAiProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgAi: ({ contrastMode, gradient, ...props }: SvgAiProps) => React.JSX.Element;
export default SvgAi;
