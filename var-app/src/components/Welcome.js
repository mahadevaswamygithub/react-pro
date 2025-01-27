import React, {Component} from "react";






// class based Component with props

// class Welcome extends Component{
//     render(){
//         return <h1> welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }


// destructuring class based component

class Welcome extends Component{
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state 
        return (
            <h1>
                welcome {name} a.k.a {heroName}
            </h1>
        )
    }
}





export default Welcome

