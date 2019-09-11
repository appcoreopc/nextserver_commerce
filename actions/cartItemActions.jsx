let cartelement = 0

export const addCartItem = text => ({
  type: 'ADD_CART',
  id: cartelement++,
  text
})

export const removeCartItem = text => ({
    type: 'REMOVE_CART',
    id: cartelement++,
    text
})
  
export const clearCartItem = () => ({
  type: 'CLEAR_CART',
  id: -1
})