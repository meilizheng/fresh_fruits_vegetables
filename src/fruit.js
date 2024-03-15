import React, { useState } from 'react'; 

function Fruit({ image, title, subtitle, price, description }) {
    // Format price to display properly
    const formattedPrice = price != null ? `$${price.toFixed(2)}` : 'Price not available';
    
    // Define state for showing the alert message for addition
    const [showAddAlert, setShowAddAlert] = useState(false);

    // Define state for showing the alert message for removal
    const [showRemoveAlert, setShowRemoveAlert] = useState(false);

    // Function to handle adding an item to the cart
    const handleAddToCart = () => {
        // Set showAddAlert to true to trigger the alert message for addition
        setShowAddAlert(true);
    };

    // Function to handle removing an item from the cart
    const handleRemoveFromCart = () => {
        // Set showRemoveAlert to true to trigger the alert message for removal
        setShowRemoveAlert(true);
    };

    return (
        <section className="card">
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="info">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
                <h5>{formattedPrice}</h5>
                <p>{description}</p>
                <button onClick={handleAddToCart}>Add</button>
                {showAddAlert && (
                    // Display the alert message for addition if showAddAlert is true
                    <div>
                        <p>Item Added!</p>
                    </div>
                )}
                <button onClick={handleRemoveFromCart}>Remove</button>
                {showRemoveAlert && (
                    // Display the alert message for removal if showRemoveAlert is true
                    <div>
                        <p>Item Removed!</p>
                    </div>
                )}
            </div>
        </section>
    );
}

// Export the Fruit component
export default Fruit;










