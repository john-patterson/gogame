import React from 'react';
import './App.css';
import { connect, sendMsg } from './Socket';
import { Header } from './Components'
import { ChatHistory, IChatRepository } from './Components/ChatHistory';
import { ChatInput } from './Components/ChatInput';

class App extends React.Component<{}, IChatRepository> {
    state: IChatRepository  = {
        messages: []
    }

    constructor(props: any) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        connect((msg) => {
            this.setState(prevState => {
                return {
                    messages: [...prevState.messages, msg]
                };
            });
        });

    }

    send(event: any) {
        if (event.key === "Enter") {
            sendMsg(event.target.value);
            event.target.value = "";
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <ChatHistory messages={this.state.messages} /> 
                <ChatInput send={this.send} />
            </div>
        );
    }

}


export default App;
