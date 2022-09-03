import axios from 'axios';
import { useEffect } from 'react';
import Home from "./Home"
import Error from "./Error"
import Photo from './Photo';

import { Routes, Route, useNavigate } from "react-router-dom"

function App() {  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/error" element={ <Error/> } />
      <Route path="/photo" element={ <Photo/> } />
      </Routes>
      </div>
  );
}

export default App;

/* 
      <div>ff</div>
      <button onClick={test}>hello world</button>
    </div> */