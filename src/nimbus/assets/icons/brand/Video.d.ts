import * as React from "react";
import type { SVGProps } from "react";
interface SvgVideoProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgVideo: ({ contrastMode, gradient, ...props }: SvgVideoProps) => React.JSX.Element;
export default SvgVideo;
