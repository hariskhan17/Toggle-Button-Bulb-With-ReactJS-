import logo from './logo.svg';
import ofimg from './images/ofimg.jpg'
import onimg from './images/onimg.jpg'
import './App.css';
import User from './User'
import { useState } from 'react';



function App() {
const [toggle,settoggle]=useState(false)

const togglebutton =()=>{
  settoggle(!toggle)
}
  return (
   <div align="center">
    <img src ={toggle?onimg:ofimg} className='w3 mt-5' alt=''  />
    <button onClick={togglebutton}>{toggle?'ON':'OFF'}</button>
<User/>





   </div>
  );
}

export default App;
