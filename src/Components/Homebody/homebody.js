import React from 'react';
import '../Homebody/homebody.css';

const Homebody = () => {
    return (
        <div className="container">
            <h2>What is this about?</h2>
            <p>Mallify is an application which aims to change your shopping experience in malls by making it much more fun, easy and interactive</p>

            <h2>Tell me more</h2>
            <p>Updates about the development progress of Mallify will be posted <a href="www.google.com">here</a></p>

            <h2>Benefits</h2>
            <ul>
                <li>Easier Access to the latest discounts</li>
                <li>Easier to find the store or product you need</li>
                <li>Tailored service to each costumer</li>
                <li>Easier to be notified for the latest promotions</li>
            </ul>
        </div>
    );
}

export default Homebody;