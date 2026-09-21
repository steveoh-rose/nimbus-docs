import * as React from "react";
import type { SVGProps } from "react";
interface SvgBlockchainProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgBlockchain: ({ contrastMode, gradient, ...props }: SvgBlockchainProps) => React.JSX.Element;
export default SvgBlockchain;
