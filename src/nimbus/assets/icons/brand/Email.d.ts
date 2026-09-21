import * as React from "react";
import type { SVGProps } from "react";
interface SvgEmailProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgEmail: ({ contrastMode, gradient, ...props }: SvgEmailProps) => React.JSX.Element;
export default SvgEmail;
