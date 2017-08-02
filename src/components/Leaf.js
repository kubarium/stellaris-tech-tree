import '../styles/tech-interface.css'
import '../styles/tech-icon.css'

import React from 'react';
import classNames from 'classnames'
import renderHTML from 'react-render-html'

const Leaf = (props) => {
    const leafBackground = classNames('leaf tech-interface', {
        [`tech-bg-${props.data.area}`]: true,
        "tech-bg-rare": props.data.is[1],
        "tech-bg-dangerous": props.data.is[0]
    })

    let sizes = []
    let sanitizedFeatures = []
    function featureSanitizer(element) {
        if (element.includes("Unlocks Component")) {
            const replacedFeature = element.replace(new RegExp(/(Small|Large|Medium)\s/, "g"), "")

            sizes.push(RegExp.$1.trim().toLowerCase())

            return sanitizedFeatures.includes(replacedFeature) === false ? sanitizedFeatures.push(replacedFeature) : null
        } else {
            //const resource = RegExp(/\(\[\[sr_(.*?)\]\]\)/, "g").exec(element)
            /* 
                        console.log("$1", RegExp.$1)
                        console.log("$2", RegExp.$2)
             */
            //return element
            return sanitizedFeatures.push(renderHTML(element.replace(new RegExp(/\(\[\[sr_(.*?)\]\]\)/, "g"), `<span className="tech-interface ${RegExp.$1}"></span>`)))
        }
    }

    props.data.feature_unlocks.forEach(featureSanitizer)

    return (
        <div className={ leafBackground }>
          <h1>{ props.data.name }</h1>
          <ul className="features">
            { sanitizedFeatures.map((feature, index) => <li key={ index }>
                                                          { feature }
                                                        </li>) }
          </ul>
          <ul className="sizes">
            { sizes.map(size => <li key={ size }>
                                  <span className={ `tech-interface ${size}` }></span>
                                </li>) }
          </ul>
          <span className={ `tech-icon ${props.data.key}` } />
          <span className={ `tech-category tech-interface ${props.data.category.replace(" ","-").toLowerCase()}` } title={ props.data.category } />
          <span className={ `tech-area tech-interface ${props.data.area}` } title={ props.data.area } />
          { props.data.is[2] && <img className="tech-repeatable" src="/images/repeatable.png" title="Repeatable" /> }
          { props.data.tier > 0 && <img className="tech-tier" src={ `/images/tier-${props.data.tier}.png` } title={ `Tier: ${props.data.tier}` } /> }
        </div>
        );
};

export default Leaf;