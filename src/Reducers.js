import data from './tech.json'

const initialState = {
    area: "Physics",
    areas: data.map(tech => tech.area).reduce((result, current) => result.indexOf(current) > -1 ? result : result.concat(current), []),
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