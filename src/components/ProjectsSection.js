import React, {useRef, useState} from 'react';
import classes from '../css/ProjectsSection.module.css'
import { FaProjectDiagram } from 'react-icons/fa';
import { motion } from "framer-motion";

const ProjectsSection = () => {
    const scrollRef = useRef(null);

    const projects = [
        {
            name: 'Minesweeper',
            text: 'Classic Minesweeper game, where You need to locate and mark all bombs without blowing up. Based od React and CSS.',
            projectLink: 'https://bejewelled-biscuit-1001ff.netlify.app/',
            githubLink: 'https://github.com/Kafarius/minesweeper',
            techs: [
                {
                    name: 'React',
                    url: 'react_logo.png'
                },
                {
                    name: 'HTML',
                    url: 'html_logo.png'
                },
                {
                    name: 'CSS',
                    url: 'css_logo.png'
                },

            ]
        },
        {
            name: 'React-Estore',
            text: 'This is a simple e-store template, where content of the cart and all changes are saved immediately in Firebase. ',
            projectLink: 'https://comforting-sunshine-412c94.netlify.app/welcome',
            githubLink: 'https://github.com/Kafarius/React-Estore',
            techs: [
                {
                    name: 'React',
                    url: 'react_logo.png'
                },
                {
                    name: 'Redux',
                    url: 'redux_logo.png'
                },
                {
                    name: 'Firebase',
                    url: 'firebase.png'
                },
                {
                    name: 'HTML',
                    url: 'html_logo.png'
                },
                {
                    name: 'CSS',
                    url: 'css_logo.png'
                },

            ]
        },
        {
            name: 'Posts',
            text: 'This is a recruitment task, which i found at github. I wanted to present my solution to this task.',
            projectLink: 'https://grand-rugelach-f47069.netlify.app/',
            githubLink: ['https://github.com/Pagepro/react-recruitment-task', 'https://github.com/Kafarius/posts'],
            techs: [
                {
                    name: 'React',
                    url: 'react_logo.png'
                },
                {
                    name: 'HTML',
                    url: 'html_logo.png'
                },
                {
                    name: 'CSS',
                    url: 'css_logo.png'
                },

            ]
        },
        {
            name: 'Random Users Data Generator',
            text: "It's a simple data generator, based on dummy-data. You can choose data by selecting checkboxes. ",
            projectLink: 'https://poetic-bunny-3a8db1.netlify.app/',
            githubLink: 'https://github.com/Kafarius/data_gen',
            techs: [
                {
                    name: 'React',
                    url: 'react_logo.png'
                },
                {
                    name: 'HTML',
                    url: 'html_logo.png'
                },
                {
                    name: 'CSS',
                    url: 'css_logo.png'
                },

            ]
        },
        {
            name: 'Calendar/Planner',
            text: "This is an application that allows You to improve your time management and plan future events. Made on Python and Django. ",
            projectLink: 'https://github.com/Kafarius/Calendar',
            githubLink: 'https://github.com/Kafarius/Calendar',
            techs: [
                {
                    name: 'Python',
                    url: 'react_logo.png'
                },
                {
                    name: 'Django',
                    url: 'django.png'
                },
                {
                    name: 'HTML',
                    url: 'html_logo.png'
                },
                {
                    name: 'CSS',
                    url: 'css_logo.png'
                },

            ]
        },
        {
            name: 'Biuro Tłumaczeń Profesjonalnych',
            text: "This is a promoting website of great translation office. ",
            projectLink: 'https://btp-chylak.pl/',
            githubLink: 'https://btp-chylak.pl/',
            techs: [
                {
                    name: 'Bootstrap',
                    url: 'react_logo.png'
                },
                {
                    name: 'HTML',
                    url: 'html_logo.png'
                },
                {
                    name: 'CSS',
                    url: 'css_logo.png'
                },

            ]
        }
    ]


    return (
        <div className={classes.projectssection}>
            <div className={classes.projectstile}>
                <div className={classes.details}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1}}
                        viewport={{ root: scrollRef, once: true }}
                        className={classes.detailsheader}>
                        <FaProjectDiagram style={{marginRight: '20px',}} />ALL PROJECTS <FaProjectDiagram style={{transform: 'rotateY(180deg)', marginLeft: '20px'}} />
                    </motion.h1>
                    <div className={classes.projects}>
                        {
                            projects.map((project, i)=>
                                <motion.div
                                    key={project.name}
                                    className={classes.projectitem}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1}}
                                    transition={{duration: 1,}}
                                    whileHover={{scale: 1.2}}
                                    whileTap={{scale: 0.9}}
                                    viewport={{ root: scrollRef, once: true}}
                                >
                                    <div className={classes.projectinner}>
                                        <a href={'#'} className={classes.projectname}>
                                            {project.name}
                                        </a>
                                        <a href={'#'} className={classes.githublink}>
                                            {project.githubLink}
                                        </a>
                                        <p className={classes.projecttext}>
                                            {project.text}
                                        </p>
                                        <div className={classes.techs}>
                                            {
                                                project.techs.map((tech)=>
                                                    <div key={tech.name} className={classes.tech}>
                                                        <img alt={tech.name} src={require(`../imgs/${tech.url}`)} />
                                                        <h3>{tech.name}</h3>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </div>
                                </motion.div>
                            )
                        }
                    </div>

                </div>
                {/*<div className={classes.segment}>*/}

                {/*</div>*/}
            </div>
        </div>
    );
};

export default ProjectsSection;