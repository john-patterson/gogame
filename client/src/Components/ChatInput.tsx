import React from "react";
import './ChatHistory.css';

export interface IChatInputProps {
    send: (event: any) => void
}

export class ChatInput extends React.Component<IChatInputProps> {
    constructor(props: IChatInputProps) {
        super(props);
    }

    render() {
        return (
            <div className="ChatInput">
                <input onKeyDown={this.props.send} />
            </div>
        );
    }
}