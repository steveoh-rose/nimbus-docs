import * as React from "react";
import type { SVGProps } from "react";
interface SvgInviteProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgInvite: ({ contrastMode, gradient, ...props }: SvgInviteProps) => React.JSX.Element;
export default SvgInvite;
