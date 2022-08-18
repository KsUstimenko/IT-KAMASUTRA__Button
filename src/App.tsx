import React from 'react';
import './App.css';

function App() {

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (num: number) => {
        console.log(num)
    }

    return <div>
        <button onClick={foo1}>1</button>
        <button onClick={() => foo2(100200)}>2</button>
    </div>
}

export default App;
