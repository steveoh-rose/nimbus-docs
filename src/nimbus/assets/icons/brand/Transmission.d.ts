import * as React from "react";
import type { SVGProps } from "react";
interface SvgTransmissionProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgTransmission: ({ contrastMode, gradient, ...props }: SvgTransmissionProps) => React.JSX.Element;
export default SvgTransmission;
