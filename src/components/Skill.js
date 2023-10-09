import React, {useEffect, useMemo, useRef, useState} from 'react';
import classes from '../css/Skill.module.css';
import background from '../imgs/redux_logo.png';

const Skill = (props) => {
    let circularProgressRef = useRef(null);
    let percentRef = useRef(null);
    const reactIsInViewPort = useIsInViewport(percentRef);

    function useIsInViewport(ref) {
        const [isIntersecting, setIsIntersecting] = useState(false);

        const observer = useMemo(
            () =>
                new IntersectionObserver(([entry]) =>
                    setIsIntersecting(entry.isIntersecting),
                ),
            [],
        );

        useEffect(() => {
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
        }, [ref, observer]);

        return isIntersecting;
    }
    //
    useEffect(()=>{

        let progressStartValue = 0;
        let progressEndValue = props.progress;
        let speed = 20;
        let progress = setInterval(()=>{
            progressStartValue++;
            percentRef.current.textContent = `${progressStartValue}%`;
            // circularProgressRef.current.style.backgroundImage = `url(${props.url})`;
            circularProgressRef.current.style.background = `conic-gradient(#5b9bcf ${progressStartValue * 3.6}deg, #ededed 0deg)`;
            if(progressStartValue === progressEndValue  ) {
                clearInterval(progress);
            }
        }, speed)
    }, [reactIsInViewPort])

    const logo = require('../imgs/' + props.url);


    return (
        <div className={classes.skill}>
            <div
                ref={circularProgressRef}
                className={classes.circularprogress}
            >
                <img src={ logo } />
            </div>
            <p>{props.name}
                <span
                    ref={percentRef}
                    className={classes.percent}> 0%
                </span>
            </p>
        </div>
    );
};

export default Skill;