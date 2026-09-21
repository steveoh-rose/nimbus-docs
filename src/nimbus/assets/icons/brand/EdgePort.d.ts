import * as React from "react";
import type { SVGProps } from "react";
interface SvgEdgePortProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgEdgePort: ({ contrastMode, gradient, ...props }: SvgEdgePortProps) => React.JSX.Element;
export default SvgEdgePort;
