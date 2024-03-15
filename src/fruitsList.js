import React from 'react';
import './App.css';
import fruits from './fruits.json';
import Fruit from './fruit.js';

// Component to render a list of fruits
function FruitsList() {
    return (
        <>
            {/* Main section for the first 5 fruits */}
            <main className="container">
                {fruits.slice(0, 5).map(fruit => (
                    <Fruit key={fruit.id} {...fruit} />
                ))}
            </main>
            {/* Article section for the next 3 fruits */}
            <article className="container">
                {fruits.slice(5, 8).map(fruit => (
                    <Fruit key={fruit.id} {...fruit} />
                ))}
            </article>
            {/* Navigation section (incorrect slicing, should be from index 8 onwards) */}
            <nav className="container">
                {fruits.slice(5,5).map(fruit =>{
                    <Fruit key={fruit.id} {...fruit} />
                })}
            </nav>
        </>
    )
}

// Export the FruitsList component
export default FruitsList;
