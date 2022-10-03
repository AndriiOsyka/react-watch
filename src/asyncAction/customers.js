export const fetchCustomers = () => {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch({type: 'MANY_CUSTOMERS', payload: json}))
    }
}
export const fetchProductToCart = (id) => {
    return ( dispatch ) => {
        fetch(`https://sandbox.musement.com/api/v3/lists/${id}`)
            .then(response => response.json())
            .then(json => dispatch({type: 'ADD_PRODUCT', payload: json}))
    }
}
