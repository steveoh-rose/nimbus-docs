import * as React from "react";
import type { SVGProps } from "react";
interface SvgFirewallProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgFirewall: ({ contrastMode, gradient, ...props }: SvgFirewallProps) => React.JSX.Element;
export default SvgFirewall;
