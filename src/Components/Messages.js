import React, { Component } from 'react'
import Header from './Header'
export class Messages extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Header></Header>
                </div>
                <div>
                    <h2>Messages</h2>
                </div>
            </React.Fragment>
        )
    }
}

export default Messages