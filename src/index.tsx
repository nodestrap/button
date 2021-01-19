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



export interface Props extends Base_Props, VariantSize, VariantTheme {
    text?    : string;
    onClick? : React.MouseEventHandler<HTMLButtonElement>;
}

export interface State extends Base_State {
}

export default class Button<TProps extends Props, TState extends State> extends Base<TProps, TState> {
    constructor(props: TProps) {
        super(props);
    }



    /*override*/ get defaultClassName(): string {
        return 'btn';
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