import React from 'react';
import cardList from './fruitsList.js';

function Header({ cartItems }) {
    // Function to handle "Cart" button click
    const handleBuyClick = () => {
        // Open a new window
        const buyWindow = window.open('', 'BuyWindow', 'width=400,height=300');

        // Write content to the new window
        if (buyWindow) {
            buyWindow.document.write(`
                <html>
                <head>
                    <title>Buy Fruits and Vegetables</title>
                </head>
                <body>
                    <h2>Cart Items</h2>
                    <ul>
                        ${cartItems.map(item => `<li>${item.title} - $${item.price.toFixed(2)}</li>`).join('')}
                    </ul>
                    <!-- Other content like quantity input and total calculation can be added here -->
                </body>
                </html>
            `);
        }
    };

    const handleDeliveryClick = () => {
        // Prompt the user to enter their address
        const address = prompt('Please enter your delivery address:');
        if (address !== "") {
            // if user entered the address display it.
            alert(`Delivery address: ${address}`);
        }  
        //else reminder the user      
        else{
            alert('Please entered the valid')
        }
    };


    return (
        <header>
            <h1 className="title">Fruits and Vegetables</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="./" className="nav-link">Home</a></li>
                    <li><button className="nav-link" onClick={handleBuyClick}>Cart</button></li>
                    <li><button className="nav-link" onClick={handleDeliveryClick}>Delivery</button></li>
                </ul>
            </nav>
        </header>
    );
}

// Export the Header component as the default export
export default Header;

