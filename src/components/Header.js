import React from 'react';
import classes from '../css/Header.module.css'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className={classes.header}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75 }}
                className={classes.navbar}>
                <a
                    onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}
                    className={classes.navlink}>
                    Home
                </a>
                <a
                    onClick={()=>window.scrollTo({top: 1000, behavior: 'smooth'})}
                    className={classes.navlink}>
                    About
                </a>
                <a
                    onClick={()=>window.scrollTo({top: 2550, behavior: 'smooth'})}
                    className={classes.navlink}>
                    Projects
                </a>
                <a
                    onClick={()=>window.scrollTo({top: 4150, behavior: 'smooth'})}
                    className={classes.navlink}>
                    Contact
                </a>
            </motion.div>


        </div>
    );
};

export default Header;