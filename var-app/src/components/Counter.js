import React, {Component} from 'react'

// setState()
class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    increment(){
        // this.state.count = this.state.count + 1 

        // this.setState({
        //     count:this.state.count +1
        // })
        // console.log(this.state.count)

        this.setState((prevState, props) => ({
            count: prevState.count +1
        }))
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter