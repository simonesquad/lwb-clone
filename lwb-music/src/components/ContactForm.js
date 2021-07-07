import React from 'react';
import './ContactForm.css';


function ContactForm() {
    return (
        <div>
            <div className="container">
            <form>
            <div className="contents">
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="email" className="form-control" placeholder="Email" name="email" />
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message here" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-2 mx-auto">
                        <input type="submit" className="btn btn-info" value="Introduce Yourself"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default ContactForm
