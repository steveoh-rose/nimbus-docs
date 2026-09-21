import * as React from "react";
import type { SVGProps } from "react";
interface SvgTicketsProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgTickets: ({ contrastMode, gradient, ...props }: SvgTicketsProps) => React.JSX.Element;
export default SvgTickets;
