import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProduct } from "@/types/product.interface";
import toast from "react-hot-toast";

interface LikeState {
  data: IProduct[];
}

const getInitialLikeState = (): LikeState => {
  if (typeof window !== 'undefined') {
    const storedLikes = localStorage.getItem('like');
    return { data: storedLikes ? JSON.parse(storedLikes) : [] };
  }
  return { data: [] }; // Server tomonda bo'sh qiymat qaytariladi
};

const initialState: LikeState = getInitialLikeState();

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<IProduct>) => {
      const isProductExist = state.data.find(
        (product) => product.id === action.payload.id
      );

      if (!isProductExist) {
        // If the product is not in the likes, add it
        toast.success('Successfully added to like');
        state.data.push(action.payload);
      } else {
        // If the product is already liked, remove it
        toast.success('Successfully removed from likes');
        state.data = state.data.filter(
          (product) => product.id !== action.payload.id
        );
      }

      // Update localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('like', JSON.stringify(state.data));
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;

export const selectLike = (state: RootState) => state.like.data;

export default likeSlice.reducer;
