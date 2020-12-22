import React from "react";

export interface MessageData {
    type: number;
    body: string;
}

export class Message extends React.Component<{message: string}, MessageData> {
    constructor(props: {message: string}) {
        super(props);

        let temp = JSON.parse(this.props.message);
        this.state = temp as MessageData
    }

    render() {
        return <div className="Message">{this.state.body}</div>
    }
}