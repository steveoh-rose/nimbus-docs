import * as React from "react";
import type { SVGProps } from "react";
interface SvgManagedSecurityProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgManagedSecurity: ({ contrastMode, gradient, ...props }: SvgManagedSecurityProps) => React.JSX.Element;
export default SvgManagedSecurity;
