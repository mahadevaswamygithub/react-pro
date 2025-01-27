import React from 'react';

const Hello = () => {
    return React.createElement(
        'div',
        {id:'hello', className:'dummyClass'},
        React.createElement('div', null, 'Hello Alice!')
    )
}

export default Hello