import React, { useState } from 'react';// Importing 'useState' hook
import Header from './header.js';//Importing Header componet
import Footer from './footer.js';//Importing Footer componet
import FruitsList from './fruitsList.js'; //Importing FruitsList componet

// Main application component
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app">
      {/* Rendering the header component and passing cart items as property */}
      <Header cartItems={cartItems} />
      <div className="layout">
        {/* Rendering the FruitsList component and passing setCartItems function as property */}
        <FruitsList setCartItems={setCartItems} />
      </div>
      {/* Rendering the Footer component */}
      <Footer />
    </div>
  );
}

// Export the App component
export default App;


