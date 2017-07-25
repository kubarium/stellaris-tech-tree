import '../styles/Leaf.css'

import React from 'react';

const Tree = (props) => {
    return (
        <div className="leaf">
          { props.tree.length }
        </div>
        );
};

export default Tree;