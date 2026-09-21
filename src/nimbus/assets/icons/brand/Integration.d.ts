import * as React from "react";
import type { SVGProps } from "react";
interface SvgIntegrationProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgIntegration: ({ contrastMode, gradient, ...props }: SvgIntegrationProps) => React.JSX.Element;
export default SvgIntegration;
