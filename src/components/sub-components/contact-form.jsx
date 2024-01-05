import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import toast, { Toaster } from 'react-hot-toast';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const failedToaster = () => toast.error('Some Field Is Empty (or) Captcha Does Not Match');
const successToaster = () => toast.success('We appreciate your interest and Will Get Back To You Soon🔥');


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
        const inputsFilled = this.inputRefs.slice(0, 3).every(ref => ref.current.value.trim() !== '');

        if (validateCaptcha(userCaptcha) && inputsFilled) {
            this.handleSubmit();
        } else {
            failedToaster();
        }
    };


    handleSubmit = async (e) => {
        // Prevent form submission if it's triggered by an event
        if (e) {
            e.preventDefault();
        }

        const serviceId = import.meta.env.VITE_SERVICEID;
        const templateId = import.meta.env.VITE_TEMPLATEID;

        try {
            this.setState({ loading: true });

            await emailjs.send(serviceId, templateId, {
                from_name: this.inputRefs[0].current.value,
                from_email: this.inputRefs[1].current.value,
                from_number: this.inputRefs[2].current.value,
                from_message: this.inputRefs[3].current.value
            });

            // Clear the input fields
            this.inputRefs.forEach(ref => ref.current.value = '');

            document.getElementById('user_captcha_input').value = '';

            loadCaptchaEnginge(6);
            successToaster();
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
                    <AnimationOnScroll animateOnce={true} animateIn="animte__fadIn">
                        <span>CONTACT</span>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__tada'>
                        <h1>Let’s Nritya Together!</h1>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn'>
                        <h3>"பரதநாட்டிய உலகில் ஒவ்வொரு நடனக் கலைஞரும் கதைசொல்லிகள்தான்."</h3>
                        <p>Dance of Communication Your Expressions in Motion! 🌟 We'll Choreograph a Swift Response!</p>
                    </AnimationOnScroll>
                    <div className="container-5">
                        <div className="contact-form">
                            <aside></aside>
                            <AnimationOnScroll animateOnce={true} animateIn='animate__fadeInRightBig'>
                                <form>
                                    <div>
                                        <label htmlFor="name">Enter Your Name</label>
                                        <input ref={this.inputRefs[0]} type="text" placeholder="Enter your Sweet name" name="name" size="30" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Enter Your Email</label>
                                        <input ref={this.inputRefs[1]} type="email" placeholder="abc@gmail.com" name="email" size="30" required />
                                    </div>
                                    <div>
                                        <label htmlFor="number">Enter Your Number</label>
                                        <input ref={this.inputRefs[2]} type="number" placeholder="+91XXXXXXXXXX" name="number" required />
                                    </div>
                                    <div>
                                        <label htmlFor="message">Enter Your Message</label>
                                        <textarea ref={this.inputRefs[3]} name="message" id="" cols="30" rows="10" placeholder="Unleash Your Inner Expressions Here🌟"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <div className="col mt-3"><LoadCanvasTemplate /></div>
                                        <div className="col mt-3">
                                            <div>
                                                <input placeholder="Enter Captcha" id="user_captcha_input" name="user_captcha_input" type="text" size="30" />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className={`btn ${loading ? 'loading' : ''}`}
                                        disabled={loading}
                                        onClick={(e) => this.doSubmit(e)}
                                    >
                                        {loading ? 'Please Wait..' : 'Submit'}
                                    </button>

                                    <Toaster
                                        toastOptions={{
                                            className: '',
                                            duration: 3000,
                                            style: {
                                                background: '#2b2833',
                                                color: '#c9ac8c',
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '100%',
                                                maxWidth: '500px',
                                                margin: '0 auto',
                                            }
                                        }}
                                    />
                                </form>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactForm;
