import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount(prevCount => (prevCount+1))
  }

  const handleResetClick = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button className="increment" onClick={handleIncrementClick}>Increment Count</button>
      <button className="reset" onClick={handleResetClick}>Reset Count</button>
    </div>
  );
}

export default App;
