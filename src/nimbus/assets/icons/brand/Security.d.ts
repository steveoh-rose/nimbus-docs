import * as React from "react";
import type { SVGProps } from "react";
interface SvgSecurityProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgSecurity: ({ contrastMode, gradient, ...props }: SvgSecurityProps) => React.JSX.Element;
export default SvgSecurity;
