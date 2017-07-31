import React from 'react';
import classNames from 'classnames'

const Leaf = (props) => {
    const leafBackground = classNames('leaf', {
        [`tech-bg-${props.data.area}`]: true,
        "tech-bg-rare": props.data.is[1],
        "tech-bg-dangerous": props.data.is[0]
    })

    let sizes = []
    let sanitizedFeatures = []
    function featureSanitizer(element) {
        if (element.includes("Unlocks Component")) {
            const replacedFeature = element.replace(RegExp(/(Small|Large|Medium)\s/, "g"), "")

            sizes.push(RegExp.lastMatch.trim())

            return sanitizedFeatures.includes(replacedFeature) === false ? sanitizedFeatures.push(replacedFeature) : null
        } else {
            return sanitizedFeatures.push(element)
        }
    }

    props.data.feature_unlocks.forEach(featureSanitizer)
    console.log(sanitizedFeatures)
    return (
        <div className={ leafBackground }>
          <h1>{ props.data.name }</h1>
          <ul>
            { sanitizedFeatures.map((feature, index) => <li key={ index }>
                                                          { feature }
                                                        </li>) }
          </ul>
          <ul>
            { sizes.map(size => <li key={ size }>
                                  { size }
                                </li>) }
          </ul>
          <img className="tech-img" src={ `/images/technologies/${props.data.key}.png` } />
          <img className="tech-category" src={ `/images/expertise/${props.data.category}.png` } title={ props.data.category } />
          <img className="tech-area" src={ `/images/research-${props.data.area}.png` } title={ props.data.area } />
          { props.data.is[2] && <img className="tech-repeatable" src="/images/repeatable.png" title="Repeatable" /> }
          { props.data.tier > 0 && <img className="tech-tier" src={ `/images/tier-${props.data.tier}.png` } title={ `Tier: ${props.data.tier}` } /> }
        </div>
        );
};

export default Leaf;