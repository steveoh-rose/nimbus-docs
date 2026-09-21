import * as React from "react";
import type { SVGProps } from "react";
interface SvgPortProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgPort: ({ contrastMode, gradient, ...props }: SvgPortProps) => React.JSX.Element;
export default SvgPort;
