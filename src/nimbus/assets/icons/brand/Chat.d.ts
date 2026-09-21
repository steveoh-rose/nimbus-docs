import * as React from "react";
import type { SVGProps } from "react";
interface SvgChatProps extends SVGProps<SVGSVGElement> {
    contrastMode?: "light" | "dark";
    gradient?: "purple-rain" | "luscious-green" | "blue-hour" | "the-way-of-water";
}
declare const SvgChat: ({ contrastMode, gradient, ...props }: SvgChatProps) => React.JSX.Element;
export default SvgChat;
