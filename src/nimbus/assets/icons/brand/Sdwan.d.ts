import * as React from "react";
import type { SVGProps } from "react";
interface SvgSdwanProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgSdwan: ({ contrastMode, gradient, ...props }: SvgSdwanProps) => React.JSX.Element;
export default SvgSdwan;
