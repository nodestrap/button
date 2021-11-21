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
export declare const noBackground: () => import("@cssfn/cssfn").StyleCollection;
export declare const usesButtonLayout: (options?: OrientationRuleOptions | undefined) => import("@cssfn/cssfn").StyleCollection;
export declare const usesButtonVariants: () => import("@cssfn/cssfn").StyleCollection;
export declare const usesButtonStates: () => import("@cssfn/cssfn").StyleCollection;
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
export interface ButtonProps extends ActionControlProps<HTMLButtonElement>, React.ButtonHTMLAttributes<HTMLButtonElement>, React.AnchorHTMLAttributes<HTMLButtonElement>, OrientationVariant, ButtonVariant {
    type?: ButtonType;
    label?: string;
    children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
export { Button as default };
export type { OrientationName, OrientationVariant };
