import * as React from "react";
import type { SVGProps } from "react";
interface SvgCloudRouterProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCloudRouter: ({ contrastMode, gradient, ...props }: SvgCloudRouterProps) => React.JSX.Element;
export default SvgCloudRouter;
