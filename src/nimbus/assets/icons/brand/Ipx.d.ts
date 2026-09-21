import * as React from "react";
import type { SVGProps } from "react";
interface SvgIpxProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgIpx: ({ contrastMode, gradient, ...props }: SvgIpxProps) => React.JSX.Element;
export default SvgIpx;
