import * as React from "react";
import type { SVGProps } from "react";
interface SvgDeviceProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgDevice: ({ contrastMode, gradient, ...props }: SvgDeviceProps) => React.JSX.Element;
export default SvgDevice;
