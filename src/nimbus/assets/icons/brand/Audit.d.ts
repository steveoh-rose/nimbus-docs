import * as React from "react";
import type { SVGProps } from "react";
interface SvgAuditProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgAudit: ({ contrastMode, gradient, ...props }: SvgAuditProps) => React.JSX.Element;
export default SvgAudit;
