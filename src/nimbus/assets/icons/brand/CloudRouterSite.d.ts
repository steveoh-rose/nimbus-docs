import * as React from "react";
import type { SVGProps } from "react";
interface SvgCloudRouterSiteProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCloudRouterSite: ({ contrastMode, gradient, ...props }: SvgCloudRouterSiteProps) => React.JSX.Element;
export default SvgCloudRouterSite;
