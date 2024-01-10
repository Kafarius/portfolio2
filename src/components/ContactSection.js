import React, {useRef} from 'react';
import classes from '../css/ContactSection.module.css';
import EmailContactForm from "./EmailContactForm";
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import { motion } from "framer-motion";
import Footer from "./Footer";


const ContactSection = (props) => {
    const scrollRef = useRef(null);

    return (
        <div id="contact-section" className={classes.contactsection}>
            <div className={classes.contacttile}>
                <motion.h1
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1}}
                    viewport={{ root: scrollRef, once: true }}
                    className={classes.contactheader}
                >
                        LET'S WORK<span>TOGETHER</span>
                </motion.h1>
                <div className={classes.segment}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1}}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.contactinfos}>
                        <motion.ul

                            // variants={list}

                            className={classes.contactdetails}>
                            <motion.li
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0}}
                                viewport={{ root: scrollRef, once: true }}
                                transition={{delay: 0.3}}
                                // variants={item}
                            >
                                <div className={classes.iconbox}>
                                    <FiMail />
                                </div>
                                <div className={classes.rightdetails}>
                                    <span>Mail me</span>
                                    <p>jan.kosieradzki@wp.pl</p>
                                    <p></p>
                                </div>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0}}
                                viewport={{ root: scrollRef, once: true }}
                                transition={{delay: 0.6}}
                                // variants={item}
                            >
                                <div className={classes.iconbox}>
                                    <FiPhone />
                                </div>
                                <div className={classes.rightdetails}>
                                    <span>Contact me</span>
                                    <p>+48 780 607 880</p>
                                    <p></p>
                                </div>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0}}
                                viewport={{ root: scrollRef, once: true }}
                                transition={{delay: 0.9}}
                                // variants={item}
                            >
                                <div className={classes.iconbox}>
                                    <FiMapPin/>
                                </div>
                                <div className={classes.rightdetails}>
                                    <span>Location</span>
                                    <p>Warsaw, 02-136</p>
                                    <p>Strubiczów</p>
                                </div>
                            </motion.li>

                        </motion.ul>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1}}
                            viewport={{ root: scrollRef, once: true }}
                            transition={{delay: 1.2}}
                            className={classes.contactsocials}>
                            <a target={'_blank'} href={'https://www.linkedin.com/in/jan-kosieradzki-701914259/'}><BiLogoLinkedin/></a>
                            <a target={'_blank'} href={'https://github.com/Kafarius'}><BiLogoGithub/></a>
                        </motion.div>
                    </motion.div>
                    <EmailContactForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactSection;