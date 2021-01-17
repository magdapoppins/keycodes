import React from 'react';

const App = () => {
    const [keyCode, setKeyCode] = React.useState('');

    const onKeyPress = e => setKeyCode(e.which);

    return <div onKeyPress={onKeyPress} style={{
        border: '1px solid hotpink',
        position: 'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '5em'
        }} tabIndex="0">
        <h1>{keyCode}</h1>
    </div>
}

export default App;