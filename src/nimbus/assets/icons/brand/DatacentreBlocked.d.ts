import * as React from "react";
import type { SVGProps } from "react";
interface SvgDatacentreBlockedProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgDatacentreBlocked: ({ contrastMode, gradient, ...props }: SvgDatacentreBlockedProps) => React.JSX.Element;
export default SvgDatacentreBlocked;
