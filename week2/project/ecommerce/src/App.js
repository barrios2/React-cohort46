import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import Homepage from './pages/HomePage';
import { useState } from 'react';

function App() {
  const [activeProductInfo, setActiveProductInfo] = useState({});

  return (
    <div className='App'>
       <Router>
        <Routes>
          <Route path='/' element={<Homepage setActiveProductInfo={setActiveProductInfo}/>}/>
          <Route path={'product/:id'} element={<ProductDetailPage activeProductInfo={activeProductInfo}/>}/>
        </Routes>
      </Router> 
    </div>
  )
}

export default App;
