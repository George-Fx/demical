import type {ProductType} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// import {utils} from '../../utils/utils';

const initialState = {
  list: [] as ProductType[],
  total: 0 as number,
};

type StateType = typeof initialState;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state: StateType = initialState,
      action: PayloadAction<ProductType>,
    ) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item: ProductType) => {
          if (item.id === action.payload.id) {
            if (item.quantity) {
              item.quantity += 1;
            }
          }
          return item;
        }, state);
        // state.total += action.payload.price;
        // price string to number
        state.total += Number(action.payload.price);
      } else {
        state.list.push({
          ...action.payload,
          quantity: 1,
        });
        state.total += Number(action.payload.price);
        // utils.showMessage({
        //   message: 'Success',
        //   description: `${action.payload.name} added to cart`,
        //   type: 'success',
        //   icon: 'success',
        // });
      }
    },
    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id && (item.quantity as number) > 1) {
            if (item.quantity) {
              item.quantity -= 1;
            }
          } else if (item.id === action.payload.id && item.quantity === 1) {
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);
        state.total -= Number(action.payload.price);
      }
    },
    modifyItem: (state, action) => {
      const inCart = state.list.find((item) => item.id === action.payload.id);

      if (inCart) {
        state.list.map((item) => {
          if (item.id === action.payload.id) {
            state.total -= item.price * (item.quantity as number);
            state.list.splice(state.list.indexOf(item), 1);
          }
          return item;
        }, state);

        state.list.push({
          ...action.payload,
          quantity: 1,
        });
        state.total += Number(action.payload.price);
      }
    },
    resetCart: (state) => {
      state.list = [];
      state.total = 0;
    },
  },
});

export const {addToCart, removeFromCart, resetCart, modifyItem} =
  cartSlice.actions;

export default cartSlice.reducer;
