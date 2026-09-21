import * as React from "react";
import type { SVGProps } from "react";
interface SvgCloudProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCloud: ({ contrastMode, gradient, ...props }: SvgCloudProps) => React.JSX.Element;
export default SvgCloud;
