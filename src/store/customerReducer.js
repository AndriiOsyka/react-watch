const defaultState = {
    customers: [{name: 'asdasd', id: 0}],
}

export const customerReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'MANY_CUSTOMERS':
        return {...state, customers: [...state.customers, ...action.payload]}
      case 'ADD_CUSTOMER':
        return {...state, customers: [...state.customers, action.payload]}
      case 'GET_CUSTOMERS':
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
      default:
        return state
    }
}