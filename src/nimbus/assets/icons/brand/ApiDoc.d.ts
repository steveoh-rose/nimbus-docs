import * as React from "react";
import type { SVGProps } from "react";
interface SvgApiDocProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgApiDoc: ({ contrastMode, gradient, ...props }: SvgApiDocProps) => React.JSX.Element;
export default SvgApiDoc;
