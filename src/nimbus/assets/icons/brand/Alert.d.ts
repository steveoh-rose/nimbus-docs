import * as React from "react";
import type { SVGProps } from "react";
interface SvgAlertProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgAlert: ({ contrastMode, gradient, ...props }: SvgAlertProps) => React.JSX.Element;
export default SvgAlert;
