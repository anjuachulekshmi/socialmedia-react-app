import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addpost from './Component/Addpost';
import Searchpost from './Component/Searchpost';
import Viewallpost from './Component/Viewallpost';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
   <Routes>
     <Route path='/' exact element={<Addpost/>} />

     
     <Route path='/search' exact element={<Searchpost/>} />
     <Route path='/viewallpost' exact element={<Viewallpost/>} />

    
     </Routes>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
