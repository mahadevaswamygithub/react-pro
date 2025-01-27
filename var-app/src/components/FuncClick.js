import React from 'react'

function FuncClick() {

    function clickHandler(){
        console.log(" Button Clicking")
    }

    return (
    <div>
        <button onClick={clickHandler }>Click</button>
    </div>
    )
}

export default FuncClick
