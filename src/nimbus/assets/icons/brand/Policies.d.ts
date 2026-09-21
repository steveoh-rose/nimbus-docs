import * as React from "react";
import type { SVGProps } from "react";
interface SvgPoliciesProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgPolicies: ({ contrastMode, gradient, ...props }: SvgPoliciesProps) => React.JSX.Element;
export default SvgPolicies;
