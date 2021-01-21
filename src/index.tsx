import React from 'react';
import Base, {
    VariantSize  as Base_VariantSize,
    VariantTheme as Base_VariantTheme,
    Props        as Base_Props,
    State        as Base_State
} from '@nodestrap/control/src/index';
import './index.scss';



export interface VariantSize  extends Base_VariantSize  { }
export interface VariantTheme extends Base_VariantTheme { }
export interface VariantButton {
    outline? : boolean;
    link?    : boolean;
}



export interface Props extends Base_Props, VariantSize, VariantTheme, VariantButton {
    text?    : string;
    onClick? : React.MouseEventHandler<HTMLButtonElement>;
}

export interface State extends Base_State {
}

/**
 * A button UI for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
 */
export default class Button<TProps extends Props = Props, TState extends State = State> extends Base<TProps, TState> {
    /*override*/ get defaultClassName(): string {
        return 'btn';
    }



    /*override*/ get compositeClassName(): string {
        const state = this.state;
        const props = this.props;
        return [
            super.compositeClassName,

            
            // variants:
            (props.outline && 'outline') || ' ',
            (props.link    && 'link')    || ' ',
        ]
        .filter(c => (c !== ' ') && (c !== '')) // removes blank classes
        .join(' '); // combines all classes separated by space
    }



    render() {
        return (
            <button
                className={this.compositeClassName}
                
                disabled={!this.enabled}


                onClick={(e)        => this.props.onClick && this.props.onClick(e)}

                onMouseEnter={(e)   => this.handleMouseEnter(e)}
                onMouseLeave={(e)   => this.handleMouseLeave(e)}

                onFocus={(e)        => this.handleFocus(e)}
                onBlur={(e)         => this.handleBlur(e)}

                onMouseDown={(e)    => this.handleMouseDown(e)}
                onMouseUp={(e)      => this.handleMouseUp(e)}

                onKeyDown={(e)      => this.handleKeyDown(e)}
                onKeyUp={(e)        => this.handleKeyUp(e)}

                onAnimationEnd={(e) => this.handleAnimationEnd(e)}
            >
                {this.props.text}
                {this.props.children}
            </button>
        );
    }
}