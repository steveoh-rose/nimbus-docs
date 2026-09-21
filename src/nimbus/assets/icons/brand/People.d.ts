import * as React from "react";
import type { SVGProps } from "react";
interface SvgPeopleProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgPeople: ({ contrastMode, gradient, ...props }: SvgPeopleProps) => React.JSX.Element;
export default SvgPeople;
