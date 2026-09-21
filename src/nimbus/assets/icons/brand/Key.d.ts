import * as React from "react";
import type { SVGProps } from "react";
interface SvgKeyProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgKey: ({ contrastMode, gradient, ...props }: SvgKeyProps) => React.JSX.Element;
export default SvgKey;
