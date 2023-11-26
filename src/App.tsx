import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HomePage} from './HomePage/HomePage'

function App() {
  return (
    <div className="App" 
    style={{ 
      backgroundImage: `url("https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg")` ,
      backgroundSize :"cover"
    }}
    >
      <HomePage/>
    </div>
  );
}

export default App;
