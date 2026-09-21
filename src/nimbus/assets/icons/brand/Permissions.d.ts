import * as React from "react";
import type { SVGProps } from "react";
interface SvgPermissionsProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgPermissions: ({ contrastMode, gradient, ...props }: SvgPermissionsProps) => React.JSX.Element;
export default SvgPermissions;
