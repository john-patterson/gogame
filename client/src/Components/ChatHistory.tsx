import React from 'react';
import './ChatHistory.css';
import { Message } from './Message';


export class ChatModel {
    data: string;

    constructor(data: string) {
        this.data = data;
    }
}

export interface IChatRepository {
    messages: ChatModel[];
}

export class ChatHistory extends React.Component<IChatRepository> {
    constructor(props: IChatRepository) {
        super(props);
    }

    render() {
        const messages = this.props.messages.map((m, idx) => {
            return (
                <Message message={m.data} />
            );
        });

        return (
            <div className="ChatHistory">
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    }

}