import React, {Component} from 'react'


// Components state

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for subcribe'
        })
    }



    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message