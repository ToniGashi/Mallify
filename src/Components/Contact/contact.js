import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="container2">
            <div className="centered">
                <h2>Contact Us</h2>
                <p>For us cosumer happiness is the number one priority, so we make it extremely easy for you to contact us. Just fill out the form, call us, or come to us in person.</p>
            </div>
            <div class="row">
                <div class="column">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.353679116157!2d-79.939636486878!3d32.789787445601306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a6bccd2f5f1%3A0x3ac6bee33f9aeb32!2s83%20Mary%20St%2C%20Charleston%2C%20SC%2029403%2C%20USA!5e0!3m2!1sen!2sbg!4v1606465146909!5m2!1sen!2sbg" title="unique" width="400" height="350" frameborder="0"></iframe>
                </div>
                <div class="column">
                    <form action="/action_page.php" className="form1">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="usa">Bulgaria</option>
                        </select>
                        <label for="state">City</label>
                        <select id="state" name="state">
                            <option value="South Carolina">Blagoevgrad</option>
                            <option value="North Carolina">Sofia</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." height="170px"></textarea>
                        <input type="submit" value="Submit" className="but1"></input>
                    </form>
                </div><br></br>
                <p className="phone">Our Phone number: <a href="tel:888-872-2329"> <b>888-872-2329</b></a> </p>
            </div>
        </div>
    )
}

export default Contact;