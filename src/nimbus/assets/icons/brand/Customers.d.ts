import * as React from "react";
import type { SVGProps } from "react";
interface SvgCustomersProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgCustomers: ({ contrastMode, gradient, ...props }: SvgCustomersProps) => React.JSX.Element;
export default SvgCustomers;
