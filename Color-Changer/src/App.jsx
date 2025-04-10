import { useState } from 'react';
import './App.css';

function App() {
  const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#A0C4FF'];
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className="app" style={{ backgroundColor: colors[index] }}>
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
}

export default App;


