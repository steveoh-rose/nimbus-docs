import * as React from "react";
import type { SVGProps } from "react";
interface SvgConnectionProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgConnection: ({ contrastMode, gradient, ...props }: SvgConnectionProps) => React.JSX.Element;
export default SvgConnection;
