import { default as React } from 'react';
import { OrientationName, OrientationRuleOptions, OrientationVariant } from '@nodestrap/basic';
import { ActionControlProps } from '@nodestrap/action-control';
export declare const defaultOrientationRuleOptions: OrientationRuleOptions;
export declare type ButtonStyle = 'link' | 'icon' | 'ghost';
export interface ButtonVariant {
    btnStyle?: ButtonStyle;
}
export declare const useButtonVariant: (props: ButtonVariant) => {
    class: ButtonStyle | null;
};
export declare const noBackground: () => import("@cssfn/cssfn").Rule;
export declare const usesButtonLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").Rule;
export declare const usesButtonLinkVariant: () => import("@cssfn/cssfn").Rule;
export declare const usesButtonVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesButtonStates: () => import("@cssfn/cssfn").Rule;
export declare const useButtonSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    gapInline: import("@cssfn/css-types").Cust.Ref;
    gapBlock: import("@cssfn/css-types").Cust.Ref;
    gapInlineSm: import("@cssfn/css-types").Cust.Ref;
    gapBlockSm: import("@cssfn/css-types").Cust.Ref;
    gapInlineLg: import("@cssfn/css-types").Cust.Ref;
    gapBlockLg: import("@cssfn/css-types").Cust.Ref;
    whiteSpace: string;
    ghostOpacity: number;
    ghostOpacityArrive: number;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    gapInline: import("@cssfn/css-types").Cust.Ref;
    gapBlock: import("@cssfn/css-types").Cust.Ref;
    gapInlineSm: import("@cssfn/css-types").Cust.Ref;
    gapBlockSm: import("@cssfn/css-types").Cust.Ref;
    gapInlineLg: import("@cssfn/css-types").Cust.Ref;
    gapBlockLg: import("@cssfn/css-types").Cust.Ref;
    whiteSpace: string;
    ghostOpacity: number;
    ghostOpacityArrive: number;
}>, cssVals: import("@cssfn/css-config").Vals<{
    gapInline: import("@cssfn/css-types").Cust.Ref;
    gapBlock: import("@cssfn/css-types").Cust.Ref;
    gapInlineSm: import("@cssfn/css-types").Cust.Ref;
    gapBlockSm: import("@cssfn/css-types").Cust.Ref;
    gapInlineLg: import("@cssfn/css-types").Cust.Ref;
    gapBlockLg: import("@cssfn/css-types").Cust.Ref;
    whiteSpace: string;
    ghostOpacity: number;
    ghostOpacityArrive: number;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export declare type ButtonType = 'button' | 'submit' | 'reset';
export interface SemanticButtonProps<TElement extends HTMLElement = HTMLElement> extends ActionControlProps<TElement>, Omit<React.ButtonHTMLAttributes<TElement>, 'type'>, Omit<React.AnchorHTMLAttributes<TElement>, 'type'> {
    type?: ButtonType | (string & {});
}
export declare const useSemanticButton: <TElement extends HTMLElement = HTMLElement>(props: SemanticButtonProps<TElement>) => {
    isNativeLink: boolean;
    isClientLink: boolean;
    semanticTag: "" | "symbol" | "object" | "link" | "clipPath" | "filter" | "mask" | "marker" | "ruby" | "table" | "sub" | "button" | "meter" | "textarea" | "style" | "progress" | "text" | "small" | "circle" | "embed" | "pre" | "caption" | "menu" | "menuitem" | "map" | "main" | "form" | "slot" | "title" | "article" | "dialog" | "figure" | "img" | "option" | "switch" | "time" | "label" | "a" | "abbr" | "address" | "area" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "canvas" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "div" | "dl" | "dt" | "em" | "fieldset" | "figcaption" | "footer" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "input" | "ins" | "kbd" | "keygen" | "legend" | "li" | "mark" | "meta" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "output" | "p" | "param" | "picture" | "q" | "rp" | "rt" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "summary" | "sup" | "template" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "textPath" | "tspan" | "use" | "view" | import("@cssfn/types").Optional<import("@nodestrap/element").Tag>[];
    semanticRole: "link" | (string & {}) | "grid" | "none" | "table" | "row" | "button" | "checkbox" | "listbox" | "radio" | "region" | "cell" | "menu" | "listitem" | "menubar" | "menuitem" | "progressbar" | "separator" | "tab" | "tabpanel" | "toolbar" | "tooltip" | "treeitem" | "scrollbar" | "main" | "form" | "alert" | "alertdialog" | "application" | "article" | "banner" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "gridcell" | "group" | "heading" | "img" | "list" | "log" | "marquee" | "math" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "note" | "option" | "presentation" | "radiogroup" | "rowgroup" | "rowheader" | "search" | "searchbox" | "slider" | "spinbutton" | "status" | "switch" | "tablist" | "term" | "textbox" | "timer" | "tree" | "treegrid" | import("@cssfn/types").Optional<React.AriaRole>[];
    isSemanticBtn: boolean;
    tag: import("@nodestrap/element").Tag | undefined;
    type: (string & {}) | ButtonType | undefined;
};
export interface ButtonProps extends SemanticButtonProps<HTMLButtonElement>, OrientationVariant, ButtonVariant {
    label?: string;
    children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
export { Button as default };
export type { OrientationName, OrientationVariant };
