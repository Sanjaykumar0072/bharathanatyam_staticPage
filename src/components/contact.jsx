import React, { Component } from "react";
import Header from "./header";
import ContactForm from "./sub-components/contact-form";
import Footer from "./footer";


class ContactUs extends Component {

    render() {

        return (
            <>
                <Header />
                <ContactForm />
                <Footer />
            </>
        );
    }
}

export default ContactUs;
