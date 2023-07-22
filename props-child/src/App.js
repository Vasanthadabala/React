import logo from './logo.svg';
import Apples from './Components/Apples';
import Pears from './Components/Pears';
import './App.css';
import Bag from './Components/Bag';
import { Children } from 'react';

function App() {
  return (
    <div>
      <Bag children={<Apples color="yellow" number="5" />}/>
      <Bag children={<Pears friend="Jhon"/>}/>
    </div> 
  );
}

export default App;
