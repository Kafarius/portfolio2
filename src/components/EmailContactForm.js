import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import classes from "../css/EmailContactForm.module.css";
import { motion } from "framer-motion";



const EmailContactForm = () => {
    const form = useRef();
    const scrollRef = useRef(null);
    const [notification, setNotification] = useState('');
    const usernameRef = useRef(null);
    const useremailRef = useRef(null);
    const usermessageRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”


        emailjs.sendForm('service_qqu6wkb', 'template_2lmc51g', form.current, '18JrTviwJhXmxFBgc')
            .then((result) => {
                // show the user a success message
                usernameRef.current.value = ''
                useremailRef.current.value = ''
                usermessageRef.current.value = ''
                setNotification('Message has been send. Thank You.');
                setTimeout(()=>{
                    setNotification('');
                }, 3000)
            }, (error) => {
                // show the user an error
                setNotification('Error. Message has not been send.');
                setTimeout(()=>{
                    setNotification('');
                }, 3000)
            });
    };


    return (
        <motion.form
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1}}
            viewport={{ root: scrollRef, once: true }}
            transition={{delay: 0.5}}
            ref={form}
            onSubmit={sendEmail}>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ root: scrollRef, once: true }}
                transition={{delay: 0.8}}
            >
                <label>Name</label>
                <input ref={usernameRef} type="text" name="user_name" required />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ root: scrollRef, once: true }}
                transition={{delay: 1.1}}
            >
                <label>Email</label>
                <input ref={useremailRef} type="email" name="user_email" required />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ root: scrollRef, once: true }}
                transition={{delay: 1.4}}
            >
                <label>Message</label>
                <textarea rows={3} ref={usermessageRef} name="message" required />
            </motion.div>
            <motion.input
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ root: scrollRef, once: true }}
                transition={{delay: 1.7}}
                type="submit"
                value='Send' />
            <p>{notification}</p>
        </motion.form>
    );
};

export default EmailContactForm;