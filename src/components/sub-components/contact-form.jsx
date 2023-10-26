import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import toast, { Toaster } from 'react-hot-toast';

const notifyToaster = () => toast('Captcha Does Not Match❌');
const successToaster = () => toast('Succes✅, We Will Get Back To You Soon🔥');

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.inputRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];

        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
        loadCaptchaEnginge(6);
    }

    doSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting by default

        let userCaptcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(userCaptcha)) {
            this.handleSubmit();
        } else {
            notifyToaster();
        }
    };


    handleSubmit = async (e) => {
        const serviceId = import.meta.env.VITE_SERVICEID;
        const templateId = import.meta.env.VITE_TEMPLATEID;

        try {
            await emailjs.send(serviceId, templateId, {
                from_name: this.inputRefs[0].current.value,
                from_email: this.inputRefs[1].current.value,
                from_number: this.inputRefs[2].current.value,
                from_message: this.inputRefs[3].current.value
            });

            successToaster();
            // Clear the input fields
            this.inputRefs[0].current.value = '';
            this.inputRefs[1].current.value = '';
            this.inputRefs[2].current.value = '';
            this.inputRefs[3].current.value = '';
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { loading } = this.state;

        return (
            <>
                <div className="contact">
                    <span>CONTACTUS</span>
                    <h1>Let’s Nritya Together!</h1>
                    <p>Even if you are a skillful and effective employer, lacking trust in your personnel or experiencing the opposite can have significant consequences.
                        <br /><br />
                        Dance of Communication Your Expressions in Motion! 🌟 We'll Choreograph a Swift Response!
                    </p>
                    <div className="container-5">
                        <div className="contact-form">
                            <aside></aside>
                            <form>
                                <div>
                                    <label htmlFor="name">Enter Your Name</label>
                                    <input ref={this.inputRefs[0]} type="text" placeholder="Enter your Sweet name" name="name" size="30" />
                                </div>
                                <div>
                                    <label htmlFor="email">Enter Your Email</label>
                                    <input ref={this.inputRefs[1]} type="email" placeholder="Email" name="email" size="30" />
                                </div>
                                <div>
                                    <label htmlFor="number">Enter Your Number</label>
                                    <input ref={this.inputRefs[2]} type="number" placeholder="Phone number" name="number" />
                                </div>
                                <div>
                                    <label htmlFor="message">Enter Your Message</label>
                                    <textarea ref={this.inputRefs[3]} name="message" id="" cols="30" rows="10" placeholder="Unleash Your Inner Expressions Here🌟"></textarea>
                                </div>
                                <div className="form-group">
                                    <div className="col mt-3"><LoadCanvasTemplate /></div>
                                    <div className="col mt-3">
                                        <div><input placeholder="Enter Captcha" id="user_captcha_input" name="user_captcha_input" type="text" size="30" /></div>
                                    </div>
                                </div>
                                <button className="btn" disabled={loading} onClick={(e) => this.doSubmit(e)}>Submit</button>
                                <Toaster
                                    position="top-center"
                                    toastOptions={{
                                        // Define default options
                                        className: '',
                                        duration: 3000,
                                        style: {
                                            background: '#8c8c8c',
                                            color: '#000',
                                        }
                                    }}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactForm;
