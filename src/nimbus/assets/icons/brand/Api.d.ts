import * as React from "react";
import type { SVGProps } from "react";
interface SvgApiProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgApi: ({ contrastMode, gradient, ...props }: SvgApiProps) => React.JSX.Element;
export default SvgApi;
