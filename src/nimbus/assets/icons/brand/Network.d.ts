import * as React from "react";
import type { SVGProps } from "react";
interface SvgNetworkProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgNetwork: ({ contrastMode, gradient, ...props }: SvgNetworkProps) => React.JSX.Element;
export default SvgNetwork;
