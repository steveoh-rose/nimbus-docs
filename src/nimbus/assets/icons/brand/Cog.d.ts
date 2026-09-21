import * as React from "react";
import type { SVGProps } from "react";
interface SvgCogProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCog: ({ contrastMode, gradient, ...props }: SvgCogProps) => React.JSX.Element;
export default SvgCog;
