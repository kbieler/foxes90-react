import React, {useState} from 'react';
import './css/App.css';
import Navbar from './components/navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './views/home';
import Shop from './views/shop';

function App() {

  
  const [dndparty, setDndparty] = useState(['Matt', 'Karun', 'Andrea', 'Ethan', 'Sam', 'Leda', 'Joseph', 'Kristen']);

  const shuffleDnd = () => {
    console.log('shuffling...')
    let tempDnd = [...dndparty];
    tempDnd.sort(() => Math.random() - 0.5);
    setDndparty(tempDnd);
  }

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route children path='/' element={<Home dndparty={dndparty} shuffleDnd={shuffleDnd}/>} />
        <Route children path='/shop' element={<Shop />} />
        <Route children path='/dnd' element={<></>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
