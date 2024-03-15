import './App.css';

// Define the Footer component
function Footer() {
 // Function to scroll to the top of the page
    const scrollToTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleContactUsClick = () => {
        // Display company's contact information
        alert("Fresh Every Day\n123 Main Street\nBellevue, Washington\nPhone: 123-456-7890\nEmail: fresh@fresh.com");
    };

    const handleYourOrderClick = () => {
        // Open a new window for the order form
        const orderWindow = window.open('', 'OrderWindow', 'width=800,height=300');
    
        // Write content to the new window
        if (orderWindow) {
            orderWindow.document.write(`
                <html>
                <head>
                    <title>Your Order</title>
                </head>
                <body>
                    <h1>Order Form</h1>
                    <label for="orderNumber">Order Number:</label>
                    <input type="text" id="orderNumber" name="orderNumber" required><br><br>
                    <label for="contactInfo">Contact Information:</label>
                    <input type="text" id="contactInfo" name="contactInfo" required><br><br>
                    <button onclick="submitOrder()">Submit</button>
    
                    <script>
                        function submitOrder() {
                            const orderNumber = document.getElementById('orderNumber').value;
                            const contactInfo = document.getElementById('contactInfo').value;
                            
                            if (orderNumber !== "" && contactInfo !== "") {
                                alert("Order Number: " + orderNumber + "\\nContact Information: " + contactInfo);
                            } else {
                                alert("Please fill out all fields.");
                            }
    
                            // Closing the window after submission
                            window.close();
                        }
                    </script>
                </body>
                </html>
            `);
        }
    };
    
    

    return (
        <footer className="footer">
            <section className="contact-info">
                <p>Contact Infor: fresh@fresh.com</p>
            </section>
            <section>
                <button className="scroll-to-top-btn" onClick ={scrollToTop}>Back To Top</button>
            </section>
            <section>
                <nav>
                    <li><a href="./" className="nav-link" onClick={handleContactUsClick}>Contact us</a></li>
                    <li><a href="./" className="nav-link" onClick={handleYourOrderClick}>Your Order</a></li>
                </nav>
            </section>
        </footer>
    )
}

// Export the Footer component
export default Footer;