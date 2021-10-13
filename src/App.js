import './App.css';
import { useState } from 'react';
import MenuList from './components/MenuList';
import Menu from './utilities/menu';

import menu from './utilities/menu';

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [selection, setSelection] = useState('menu');
  

  let html;
    if(selection === 'menu') {
      html = <MenuList menuItems={menu}/>
    }
  return (
    <>
    <div>
     <header id="header">
      <h1>ROAD KILL GRILL</h1>
      <h2>YOU KILL IT, WE GRILL IT!</h2>
     </header>

     
      {html}
      <button type="button" id="orderbutton" onClick={() => setSelection('order')}>BEGIN ORDER</button>
    
    
    </div>
    </>
  );
}

export default App;
