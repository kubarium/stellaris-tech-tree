import React from 'react';
import classNames from 'classnames'

const Leaf = (props) => {
    const leafBackground = classNames('leaf', {
        [`tech-bg-${props.data.area}`]: true,
        "tech-bg-rare": props.data.is[1],
        "tech-bg-dangerous": props.data.is[0]
    })
    return (
        <div className={leafBackground}>
            <h1>
                {props.data.name}
            </h1>
            <ul>
                {props
                    .data
                    .feature_unlocks
                    .map((feature, index) =>< li key = {
                        index
                    } > {
                        feature
                    } < /li>)}
            </ul>
            <img className="tech-img" src={`/images/technologies/${props.data.key}.png`}/>
            <img
                className="tech-category"
                src={`/images/expertise/${props.data.category}.png`}/>
            <img className="tech-area" src={`/images/research-${props.data.area}.png`}/> {props.data.is[2] > 0 && <img className="tech-tier" src="/images/repeatable.png"/>}
            {props.data.tier > 0 && <img className="tech-tier" src={`/images/tier-${props.data.tier}.png`}/>}
        </div>
    );
};

export default Leaf;