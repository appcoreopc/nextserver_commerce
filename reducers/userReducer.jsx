const userReducers = (state = [], action) => {
    switch (action.type) {
      case 'USER_SIGNED_IN':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'USER_SIGNED_OUT':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      case 'USER_LOGGING_IN':
            return [              
            ]
      default:
        return state
    }
  }
  
  export default userReducers
  