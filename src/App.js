
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './components/product';

import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Product/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
