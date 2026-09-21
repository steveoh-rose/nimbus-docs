import * as React from "react";
import type { SVGProps } from "react";
interface SvgProductProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgProduct: ({ contrastMode, gradient, ...props }: SvgProductProps) => React.JSX.Element;
export default SvgProduct;
