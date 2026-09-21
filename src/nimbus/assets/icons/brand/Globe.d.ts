import * as React from "react";
import type { SVGProps } from "react";
interface SvgGlobeProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgGlobe: ({ contrastMode, gradient, ...props }: SvgGlobeProps) => React.JSX.Element;
export default SvgGlobe;
