import * as React from "react";
import type { SVGProps } from "react";
interface SvgCarrierProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCarrier: ({ contrastMode, gradient, ...props }: SvgCarrierProps) => React.JSX.Element;
export default SvgCarrier;
