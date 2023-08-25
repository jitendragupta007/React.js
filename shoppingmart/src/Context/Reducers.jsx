

export const cartReducer =(state, action) =>{
    switch(action.type){
        case "ADD_TO_CART":
        return {...state, cart:[...state.cart, {...action.payload, qty:1}]}
       default:
        return state;

    }
}


//action is the type of the action whatever
// it is like inc and dec or any other type of action
// whichever we want to perform like
//adding removing deleting etc.