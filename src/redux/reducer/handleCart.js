const handleCart = (state = {}, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state[product.id];
      if (exist) {
        return {
          ...state,
          [product.id]: { ...exist, qty: exist.qty + 1 },
        };
      } else {
        return {
          ...state,
          [product.id]: { ...product, qty: 1 },
        };
      }

    case "DELITEM":
      const exist1 = state[product.id];
      if (exist1.qty === 1) {
        const { [product.id]: removedItem, ...newState } = state;
        return newState;
      } else {
        return {
          ...state,
          [product.id]: { ...exist1, qty: exist1.qty - 1 },
        };
      }

    default:
      return state;
  }
};

export default handleCart;
