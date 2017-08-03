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

            const replacedFeature = RegExp(/(Small|Large|Medium)\s/, "g").test(element) ? element.replace(RegExp.$1, "") : element

            sizes.push(RegExp.$1.trim().toLowerCase())

            return sanitizedFeatures.includes(replacedFeature) === false ? sanitizedFeatures.push(replacedFeature) : null
        } else {
            return new RegExp(/(\(\[\[sr_(.*?)\]\]\))/, "g").test(element) ? sanitizedFeatures.push(renderHTML(element.replace(RegExp.$1, `<span className="tech-interface ${RegExp.$2}"></span>`))) : sanitizedFeatures.push(element)
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
          { props.data.is[2] && <span className={ `tech-repeatable tech-interface repeatable` } title="Repeatable" /> }
          { props.data.tier > 0 && <span className={ `tech-tier tech-interface tier-${props.data.tier}` } title={ `Tier: ${props.data.tier}` } /> }
        </div>
        );
};

export default Leaf;