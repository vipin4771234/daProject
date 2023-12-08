import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface Products {
  products: any;
}

const initialProduct: any = {
  products: [],
};

export const ProductSlice = createSlice({
  name: 'Products',
  initialState: initialProduct,
  reducers: {
    setProducts: (state, action: PayloadAction<Products[]>) => {
      console.log('sdfsdfs', action.payload);
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setProducts} = ProductSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default ProductSlice.reducer;
