import * as React from "react";
import type { SVGProps } from "react";
interface SvgServerProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgServer: ({ contrastMode, gradient, ...props }: SvgServerProps) => React.JSX.Element;
export default SvgServer;
