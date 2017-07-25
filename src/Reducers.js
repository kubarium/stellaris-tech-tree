import data from './tech.json'

const initialState = {
  tree: data
}

const tech = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return state
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.id)
        ? {
          ...todo,
          completed: !todo.completed
        }
        : todo
      )
    default:
      return state
  }
}

export default tech