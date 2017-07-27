import '../styles/Tree.css'

import Leaf from '../containers/Leaf'
import React from 'react';

const Tree = (props) => {
  return (
    <div className="tree">
      {props
        .tree
        .map(leaf => <Leaf ley={leaf.key} data={leaf}/>)}
    </div>
  );
};

export default Tree;