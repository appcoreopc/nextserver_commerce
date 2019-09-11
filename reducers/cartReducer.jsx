const cartActions = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CART':
        console.log('item received', state)
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_ITEM':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      case 'CLEAR_CART':
            return [              
            ]
      default:
        return state
    }
  }
  
  export default cartActions
  