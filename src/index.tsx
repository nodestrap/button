import React from 'react';
import Base, { Props as Base_Props, State as Base_State } from '@nodestrap/control/src/index';
import './index.scss';



export interface Props extends Base_Props {
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
                onClick={(e)        => this.props.onClick && this.props.onClick(e)}


                
                className={this.compositeClassName}

                disabled={!this.enabled}

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