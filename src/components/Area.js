import '../styles/Area.css'
import '../styles/tech-interface.css'

import React from 'react';
import classNames from 'classnames'

const Area = (props) => {
    return (
        <ul className="areas">
          { props
                .areas
                .map(area => <li onMouseOver={ props.hoverArea } onClick={ props.changeArea } data-area={ area.name } className={ classNames('area tech-interface', {
                                                                                                                     'area-on': area.active,
                                                                                                                     'area-off': !area.active
                                                                                                                 }) }>
                               { area.name }
                             </li>) }
        </ul>
        );
};

export default Area;