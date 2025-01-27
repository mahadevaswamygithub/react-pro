import React, {Component} from 'react';


// Function based default example

// function Greet() {
//     return <h1> Hellow Alice</h1>
// }


// export default Greet

//-----------------------------------------------------
// function based name export

// export const Greet = () => <h1> Hello Bob</h1>

//---------------------------------------------------

// const Greet = props => {
//     return (
//         <dic>
//             <h1>Hello {props.name} aka {props.heroName}</h1>
//             {props.children}
//         </dic>
//     )
// }




// destructuring props and state

// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>
//                 Hello {name} and {heroName}
//             </h1>
//         </div>
//     )
// }

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} and he is {heroName}</h1>
        </div>
    )
}

export default Greet