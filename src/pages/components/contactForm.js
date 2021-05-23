import React from "react";
import Axios from "axios";

const ContactForm = (props) => {
    const postContact = (name, email, message) => {
        // Axios.post(
        //     "https://www.api.thomasrolfe.co.uk/wp-json/contact-form-7/v1/contact-forms/62/feedback",
        //     querystring.stringify({
        //         "your-name": name,
        //         "your-email": email,
        //         "your-message": message,
        //         "your-subject": "New contact from website",
        //     })
        // )
        //     .then((response) => {
        //         successModal(
        //             "Thankyou for your message. I will respond as soon as possible."
        //         );
        //         setName("");
        //         setEmail("");
        //         setMessage("");
        //         TrackContactSubmitted();
        //     })
        //     .catch((e) => {
        //         errorModal(
        //             "Oops, something went wrong. Please check your inputs and try again."
        //         );
        //     });
    };

    return <form></form>;
};

export default ContactForm;
