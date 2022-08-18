import React, {MouseEvent} from 'react';
import './App.css';

function App() {

    const onClickHandler = (name: string) => {
        console.log(name)
    }

  return (
    <div className="App">
      <button onClick={(event) => onClickHandler('Vasya')}>MyYouTubeChannel-1</button>
      <button onClick={(event) =>onClickHandler('Ivan')}>MyYouTubeChannel-2</button>
      <button onClick={() => onClickHandler('some info')}>MyYouTubeChannel-3</button>
    </div>
  );
}

export default App;
