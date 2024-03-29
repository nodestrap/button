// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
mainComposition, 
// styles:
style, vars, imports, 
// rules:
rule, variants, states, isNotHover, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import { borderRadiuses, } from '@nodestrap/borders'; // configurable borders & border radiuses defs
import spacers from '@nodestrap/spacers'; // configurable spaces defs
// nodestrap components:
import { 
// hooks:
useTestSemantic, } from '@nodestrap/element';
import { 
// hooks:
usesSizeVariant, defaultInlineOrientationRuleOptions, normalizeOrientationRule, usesOrientationRule, useOrientationVariant, gradientOf, notOutlined, isOutlined, usesOutlinedVariant, outlinedOf, usesMildVariant, usesForeg, usesBorderStroke, usesBorderRadius, usesPadding, } from '@nodestrap/basic';
import { 
// hooks:
isActive, } from '@nodestrap/indicator';
import { 
// hooks:
usesThemeActive, isFocus, isArrive, } from '@nodestrap/control';
import { 
// hooks:
isPress, 
// utilities:
isClientSideLink, 
// styles:
usesActionControlLayout, usesActionControlVariants, usesActionControlStates, ActionControl, } from '@nodestrap/action-control';
// hooks:
// layouts:
export const defaultOrientationRuleOptions = defaultInlineOrientationRuleOptions;
export const useButtonVariant = (props) => {
    return {
        class: props.btnStyle ? props.btnStyle : null,
    };
};
// styles:
export const noBackground = () => {
    // dependencies:
    // borders:
    const [, , borderStrokeDecls] = usesBorderStroke();
    return style({
        ...variants([
            notOutlined({
                ...style({
                    // borders:
                    [borderStrokeDecls.borderWidth]: '0px', // noBorder if not explicitly `.outlined`
                }),
            }),
        ]),
        ...states([
            isActive({
                ...imports([
                    outlinedOf(true), // keeps outlined variant
                ]),
            }),
            isFocus({
                ...imports([
                    outlinedOf(true), // keeps outlined variant
                ]),
            }),
            isArrive({
                ...imports([
                    outlinedOf(true), // keeps outlined variant
                ]),
            }),
            isPress({
                ...imports([
                    outlinedOf(true), // keeps outlined variant
                ]),
            }),
        ]),
        ...variants([
            notOutlined({
                ...imports([
                    outlinedOf(true), // keeps outlined variant
                ]),
            }),
        ], { minSpecificityWeight: 4 }), // force to win with states' specificity weight
    });
};
export const usesButtonLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    const [orientationBlockSelector, orientationInlineSelector] = usesOrientationRule(options);
    return style({
        ...imports([
            // layouts:
            usesActionControlLayout(),
        ]),
        ...style({
            // layouts:
            display: 'inline-flex',
            ...rule(orientationBlockSelector, {
                flexDirection: 'column', // items are stacked vertically
            }),
            ...rule(orientationInlineSelector, {
                flexDirection: 'row', // items are stacked horizontally
            }),
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            // positions:
            verticalAlign: 'baseline',
            // typos:
            textAlign: 'center',
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    });
};
export const usesButtonLinkVariant = () => {
    // dependencies:
    // borders:
    const [, , borderRadiusDecls] = usesBorderRadius();
    // spacings:
    const [, , paddingDecls] = usesPadding();
    return style({
        ...imports([
            // backgrounds:
            noBackground(),
            // colors:
            usesThemeActive(), // set the active theme as the default theme
        ]),
        ...style({
            // borders:
            // small rounded corners on top:
            [borderRadiusDecls.borderStartStartRadius]: borderRadiuses.sm,
            [borderRadiusDecls.borderStartEndRadius]: borderRadiuses.sm,
            // small rounded corners on bottom:
            [borderRadiusDecls.borderEndStartRadius]: borderRadiuses.sm,
            [borderRadiusDecls.borderEndEndRadius]: borderRadiuses.sm,
            // spacings:
            [paddingDecls.paddingInline]: spacers.xs,
            [paddingDecls.paddingBlock]: spacers.xs,
            // typos:
            textDecoration: 'underline',
            lineHeight: 1,
            // customize:
            ...usesGeneralProps(usesPrefixedProps(cssProps, 'link')), // apply general cssProps starting with link***
        }),
        ...variants([
            notOutlined({
                ...imports([
                    // backgrounds:
                    gradientOf(false), // gradient is not supported if not `.outlined`
                ]),
            }),
        ]),
    });
};
export const usesButtonVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    // colors:
    const [, outlinedRefs] = usesOutlinedVariant();
    const [, mildRefs] = usesMildVariant();
    const [, , foregDecls] = usesForeg();
    return style({
        ...imports([
            // variants:
            usesActionControlVariants(),
            // layouts:
            sizes(),
        ]),
        ...variants([
            rule(['.link', '.icon', '.ghost'], {
                ...imports([
                    noBackground(),
                ]),
            }),
            rule(['.link', '.icon'], {
                ...imports([
                    usesButtonLinkVariant(),
                ]),
            }),
            rule('.icon', {
                ...variants([
                    notOutlined({
                        ...vars({
                            /*
                                `noBackground()` is causing `.outlined` actived
                                => currentColor = theme color
                                so we fix it:
                                => currentColor = foreg color at `.mild` variant
                            */
                            [foregDecls.foreg]: mildRefs.foregFn,
                        }),
                    }),
                    isOutlined({
                        ...vars({
                            [foregDecls.foreg]: outlinedRefs.foregFn,
                        }),
                    }),
                ]),
            }),
            rule('.ghost', {
                ...style({
                    // borders:
                    boxShadow: 'none !important',
                    // customize:
                    ...usesGeneralProps(usesPrefixedProps(cssProps, 'ghost')), // apply general cssProps starting with ghost***
                }),
                ...states([
                    isNotHover({
                        ...imports([
                            // backgrounds:
                            gradientOf(false), // hides the gradient to increase invisibility
                        ]),
                    }),
                    isArrive({
                        // appearances:
                        opacity: cssProps.ghostOpacityArrive, // increase the opacity to increase visibility
                    }),
                ]),
            }),
        ]),
    });
};
export const usesButtonStates = () => {
    return style({
        ...imports([
            // states:
            usesActionControlStates(),
        ]),
    });
};
export const useButtonSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesButtonLayout(),
        // variants:
        usesButtonVariants(),
        // states:
        usesButtonStates(),
    ])),
], /*sheetId :*/ '7rehb2h20q'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        //#region spacings
        gapInline: spacers.sm,
        gapBlock: spacers.sm,
        gapInlineSm: spacers.xs,
        gapBlockSm: spacers.xs,
        gapInlineLg: spacers.md,
        gapBlockLg: spacers.md,
        //#endregion spacings
        // typos:
        whiteSpace: 'normal',
        // ghost style:
        ghostOpacity: 0.5,
        ghostOpacityArrive: 1,
    };
}, { prefix: 'btn' });
export const useSemanticButton = (props) => {
    // fn props:
    const isNativeLink = !!props.href;
    const isClientLink = !isNativeLink && !!isClientSideLink(props.children);
    const semanticTag = props.semanticTag ?? (isNativeLink ? 'a' : ['button', 'a']);
    const semanticRole = props.semanticRole ?? (isNativeLink ? 'link' : ['button', 'link']);
    const tag = props.tag ?? (isClientLink ? 'a' : undefined);
    const [, , , isSemanticBtn] = useTestSemantic({ tag, role: props.role, semanticTag, semanticRole }, { semanticTag: 'button', semanticRole: 'button' });
    const type = props.type ?? (isSemanticBtn ? 'button' : undefined);
    return {
        isNativeLink,
        isClientLink,
        semanticTag,
        semanticRole,
        isSemanticBtn,
        tag,
        type,
    };
};
// defaults:
const defaultOutlined = false;
const defaultMild = false;
export function Button(props) {
    // styles:
    const sheet = useButtonSheet();
    // variants:
    const orientationVariant = useOrientationVariant(props);
    const buttonVariant = useButtonVariant(props);
    // rest props:
    const { 
    // accessibilities:
    label, press, 
    // variants:
    outlined = defaultOutlined, mild = defaultMild, ...restProps } = props;
    // fn props:
    const { semanticTag, semanticRole, tag, type, } = useSemanticButton(props);
    const pressFn = press ?? ((!!props.active && !outlined && !mild) || undefined); // if (active (as press) === false) => uncontrolled press
    // jsx:
    return (React.createElement(ActionControl, { ...restProps, 
        // semantics:
        semanticTag: semanticTag, semanticRole: semanticRole, tag: tag, "aria-label": props['aria-label'] ?? label, 
        // accessibilities:
        enabled: props.enabled ?? !(props.disabled ?? false), press: pressFn, 
        // variants:
        outlined: outlined, mild: mild, 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            orientationVariant.class,
            buttonVariant.class,
        ], ...{
            // actions:
            type,
        } }, props.children));
}
export { Button as default };
