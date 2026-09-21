import * as React from "react";
import type { SVGProps } from "react";
interface SvgMaintenanceProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgMaintenance: ({ contrastMode, gradient, ...props }: SvgMaintenanceProps) => React.JSX.Element;
export default SvgMaintenance;
