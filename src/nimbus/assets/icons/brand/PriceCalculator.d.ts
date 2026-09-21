import * as React from "react";
import type { SVGProps } from "react";
interface SvgPriceCalculatorProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgPriceCalculator: ({ contrastMode, gradient, ...props }: SvgPriceCalculatorProps) => React.JSX.Element;
export default SvgPriceCalculator;
