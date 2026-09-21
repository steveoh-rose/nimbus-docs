import * as React from "react";
import type { SVGProps } from "react";
interface SvgVoiceProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgVoice: ({ contrastMode, gradient, ...props }: SvgVoiceProps) => React.JSX.Element;
export default SvgVoice;
