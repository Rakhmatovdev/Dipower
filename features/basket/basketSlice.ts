import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IProduct } from '@/types/product.interface';
import toast from 'react-hot-toast';

interface BasketState {
  data: IProduct[];
}

const getInitialBasketState = (): BasketState => {
  if (typeof window !== 'undefined') {
    const storedBasket = localStorage.getItem('basket');
    return { data: storedBasket ? JSON.parse(storedBasket) : [] };
  }
  return { data: [] };
};

const initialState: BasketState = getInitialBasketState();

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<IProduct>) => {
      const isProductExist = state.data.find(
        (product) => product.id === action.payload.id
      );
      if (!isProductExist) {
        toast.success('Successfully added to Basket');
        state.data.push(action.payload);
        if (typeof window !== 'undefined') {
          localStorage.setItem('basket', JSON.stringify(state.data));
        }
      }
    },
    deleteBasket: (state, action: PayloadAction<IProduct>) => {
      const newData = state.data.filter(
        (product) => product.id !== action.payload.id
      );
      if (newData.length !== state.data.length) {
        toast.success('Successfully deleted from Basket');
      } else {
        toast.error('Product not found in Basket');
      }
      state.data = newData;
      if (typeof window !== 'undefined') {
        localStorage.setItem('basket', JSON.stringify(state.data));
      }
    },
  },
});

export const { addBasket, deleteBasket } = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket.data;

export default basketSlice.reducer;
