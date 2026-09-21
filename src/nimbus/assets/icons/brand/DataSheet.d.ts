import * as React from "react";
import type { SVGProps } from "react";
interface SvgDataSheetProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgDataSheet: ({ contrastMode, gradient, ...props }: SvgDataSheetProps) => React.JSX.Element;
export default SvgDataSheet;
