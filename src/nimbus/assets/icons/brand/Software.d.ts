import * as React from "react";
import type { SVGProps } from "react";
interface SvgSoftwareProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgSoftware: ({ contrastMode, gradient, ...props }: SvgSoftwareProps) => React.JSX.Element;
export default SvgSoftware;
