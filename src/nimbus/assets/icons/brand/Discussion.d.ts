import * as React from "react";
import type { SVGProps } from "react";
interface SvgDiscussionProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgDiscussion: ({ contrastMode, gradient, ...props }: SvgDiscussionProps) => React.JSX.Element;
export default SvgDiscussion;
