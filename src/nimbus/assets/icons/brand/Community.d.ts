import * as React from "react";
import type { SVGProps } from "react";
interface SvgCommunityProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCommunity: ({ contrastMode, gradient, ...props }: SvgCommunityProps) => React.JSX.Element;
export default SvgCommunity;
