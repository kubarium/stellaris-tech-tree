import * as Actions from './Actions'

import data from './tech.json'

const initialState = {
  areas: data.map(tech => tech.area).reduce((result, current) => result.indexOf(current) > -1 ? result : result.concat(current), []).map((area, index) => ({
    name: area,
    active: index === 0,
    hover: false
  })),
  tree: data
}

const tech = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_AREA:
      return Object.assign({}, state, {
        areas: state.areas.slice().map(area => ({
          ...area,
          active: area.name === action.name
        }))
      })
    case Actions.HOVER_AREA:
      return Object.assign({}, state, {
        areas: state.areas.slice().map(area => ({
          ...area,
          hover: area.name === action.name
        }))
      })
    default:
      return state
  }
}

export default tech