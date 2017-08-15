import '../styles/Tree.css'

import Leaf from '../containers/Leaf'
import React from 'react';

const groupBy = (arr, key) => {
  return arr.reduce(function(rv, x) {
    let v = key instanceof Function ? key(x) : x[key];
    let el = rv.find((r) => r && r.key === v);
    if (el) {
      el.values.push(x);
    } else {
      rv.push({
        key: v,
        values: [x]
      });
    }
    return rv;
  }, []);
}
const Tree = (props) => {

  const fuck = groupBy(props.tree, "tier")
  //const fuck = props.tree.map(leaf => leaf.tier).reduce((result, current) => result.indexOf(current) > -1 ? result : result.concat(current), [])
  //console.log(fuck)
  return (
    <div className="tree">
      { fuck.map((tier, index) => <div key={ index } className={ index }>
                                    { console.log(tier) }
                                    { tier.values
                                        .map(leaf => <Leaf key={ leaf.key } data={ leaf } />) }
                                  </div>) }
    </div>
    );
};

export default Tree;