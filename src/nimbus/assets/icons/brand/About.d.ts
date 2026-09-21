import * as React from "react";
import type { SVGProps } from "react";
interface SvgAboutProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgAbout: ({ contrastMode, gradient, ...props }: SvgAboutProps) => React.JSX.Element;
export default SvgAbout;
