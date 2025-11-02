import './contactform.css'
import { useState } from 'react';

function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const updForm = (event) => {
        const input = event.target;
        if (input.id == 'firstname') {
            setFirstName(input.value);
        } else if (input.id == 'lastname') {
            setLastName(input.value);
        } else if (input.id == 'comment') {
            setComment(input.value);
        } else if (input.id == 'email') {
            setEmail(input.value);
        } else return;
    }

return(
    <>
    <p className="small">this is just an example of react routing and doesn't actually do anything</p>
    <div className="form-row">
        <div>
            <label htmlFor="firstname">First Name</label>
            <br />
            <input type="text" placeholder='John' value={firstName} id='firstname' onChange={updForm} />
        </div>
        <div>
            <label htmlFor="lastname">Last Name</label>
            <br />
            <input type="text" placeholder='Doe' value={lastName} id='lastname' onChange={updForm} />
        </div>
    </div>
    <br />
    <div className="form-row">
        <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" placeholder='jdoe@proton.me' value={email} id='email' onChange={updForm} />
        </div>
        <div>
            <label htmlFor="comment">Comment</label>
            <br />
            <textarea placeholder='I HATE YOU!!!' value={comment} id='comment' onChange={updForm} />
        </div>
    </div>
    <div className="form-row"></div>
    </>
)

}

export default ContactForm;