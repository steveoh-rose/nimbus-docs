import * as React from "react";
import type { SVGProps } from "react";
interface SvgActivityFeedProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgActivityFeed: ({ contrastMode, gradient, ...props }: SvgActivityFeedProps) => React.JSX.Element;
export default SvgActivityFeed;
