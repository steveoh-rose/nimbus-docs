import * as React from "react";
import type { SVGProps } from "react";
interface SvgDesignProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgDesign: ({ contrastMode, gradient, ...props }: SvgDesignProps) => React.JSX.Element;
export default SvgDesign;
