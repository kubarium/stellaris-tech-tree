const tech = (state, action) => {
    switch (action.type) {
      case 'GET_DATA':
      console.log(state)  
        return state
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default tech