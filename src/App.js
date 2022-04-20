import './App.css';
import {useState} from 'react';
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [selected, setSelected] = useState('Choose you\'r favorite Framework');
  return (
    <div className="App">
      <Dropdown selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default App;
