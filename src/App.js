import './App.css';
import { useState } from 'react';
import Menu from './Menu';

function App() {
  const [selection, setSelection] = useState('');

  let html;
    if(selection === 'menu') {
      html = <Menu />
    }
  return (
    <>
    <div>
    <header>
      <h1>ROAD KILL GRILL</h1>
      <h2>YOU KILL IT, WE GRILL IT!</h2>
      <button type="button" onClick={() => setSelection('menu')}>MENU</button>
      <button type="button" onClick={() => setSelection('order')}>BEGIN ORDER</button>
    </header>
    
    </div>
    </>
  );
}

export default App;
