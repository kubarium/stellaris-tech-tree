import React from 'react';
import classNames from 'classnames'
const Leaf = (props) => {
    const leafBackground = classNames('leaf', {
        [`tech-bg-${props.data.area}`]: true,
        "tech-bg-rare": props.data.is[1],
        "tech-bg-dangerous": props.data.is[0]
    })
    console.log(props.data.name, leafBackground)
    return (
        <div className={leafBackground}>
            <h1>
            {props.data.name}            
            </h1>
            <img
                className="tech-img"
                src={`/images/technologies/tech_${props.data.key}.png`}/>
        </div>
    );
};

export default Leaf;