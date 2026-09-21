import * as React from "react";
import type { SVGProps } from "react";
interface SvgRouterProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgRouter: ({ contrastMode, gradient, ...props }: SvgRouterProps) => React.JSX.Element;
export default SvgRouter;
