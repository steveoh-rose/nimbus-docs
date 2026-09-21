import * as React from "react";
import type { SVGProps } from "react";
interface SvgUsersProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgUsers: ({ contrastMode, gradient, ...props }: SvgUsersProps) => React.JSX.Element;
export default SvgUsers;
