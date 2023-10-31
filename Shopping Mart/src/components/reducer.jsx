export const reducer = (state, action) => {
  console.log("action", action);
  if (action.type === "REMOVE_ITEM") {
    console.log(state, "inside");
    return {
      ...state,
      item: state.item?.filter((currentElement) => {
        console.log(currentElement, "currentElement");
        return currentElement.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, item: [] };
  }

  if (action.type === "INCREMENT") {
    //update cart to find out the item which was clicked
    //it will loop and find out from all the items in the cart.

    let updatedCart = state.item.map((element) => {
      if (element.id === action.payload) {
        return { ...element, quantity: element.quantity + 1 };
      }
      return element;
    });
    return { ...state, item: updatedCart };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.item
      .map((element) => {
        if (element.id === action.payload) {
          return { ...element, quantity: element.quantity - 1 };
        }
        return element;
      })
      .filter((element) => {
        return element.quantity !== 0;
      });
    return { ...state, item: updatedCart };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;
        let updatedTotalAmount = price*quantity;
        accum.totalItem += quantity;
        accum.totalAmount += updatedTotalAmount;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount:0, //initial value =0
      }
    );

    return { ...state, totalItem, totalAmount };
  }
  return state;
};
