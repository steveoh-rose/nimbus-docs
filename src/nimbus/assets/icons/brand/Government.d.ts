import * as React from "react";
import type { SVGProps } from "react";
interface SvgGovernmentProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgGovernment: ({ contrastMode, gradient, ...props }: SvgGovernmentProps) => React.JSX.Element;
export default SvgGovernment;
