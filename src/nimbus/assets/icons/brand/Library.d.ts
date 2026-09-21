import * as React from "react";
import type { SVGProps } from "react";
interface SvgLibraryProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgLibrary: ({ contrastMode, gradient, ...props }: SvgLibraryProps) => React.JSX.Element;
export default SvgLibrary;
