import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';
import './App.css';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/Foodie-app" element={<Home/> } />
        <Route path= "/success" element={<ProtectedRoute element={<Success/>}/>} />
        <Route path="/*" element= {<Error/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
