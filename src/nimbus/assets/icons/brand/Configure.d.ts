import * as React from "react";
import type { SVGProps } from "react";
interface SvgConfigureProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgConfigure: ({ contrastMode, gradient, ...props }: SvgConfigureProps) => React.JSX.Element;
export default SvgConfigure;
