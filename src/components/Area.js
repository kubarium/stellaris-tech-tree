import '../styles/Area.css'

//import Leaf from '../containers/Leaf'
import React from 'react';
import classNames from 'classnames'

const Area = (props) => {
    return (
        <ul className="tree">
          { props
                .areas
                .map(area => <li className={ classNames('tech-interface', {
                                'area-on': props.area === area
                            }) }>
                               { area }
                             </li>) }
        </ul>
        );
};

export default Area;