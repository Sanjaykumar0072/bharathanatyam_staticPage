import React, { Component } from "react";
import Header from "./header";
import ContactForm from "./sub-components/contact-form";
import Footer from "./footer";
import ScrollToTop from "./sub-components/scroll-to-top";


class ContactUs extends Component {

    render() {

        return (
            <>
                <Header />
                <ScrollToTop />
                <div className="contactPage">
                    <ContactForm />

                </div>
                <Footer />
            </>
        );
    }
}

export default ContactUs;
