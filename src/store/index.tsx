import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
    cart: {
    nameOfProduct: string,
    price: number,
    amount: number,
    id: string,
    fullPrice: number,
    url: string
    }[],
    totalAmount: number
};

const initialState: InitialState = {
    cart: [],
    totalAmount: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{
            nameOfProduct: string,
            id: string,
            url: string
    price: number,
    amount: number
        }>) {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id ===newItem.id )
            if(!existingItem) {
                state.cart.push({
                    nameOfProduct: newItem.nameOfProduct,
                    price: newItem.price,
                    amount: newItem.amount,
                    url: newItem.url,
                    id: newItem.id,
                    fullPrice: newItem.price*newItem.amount
                });
            } else {
                if (existingItem.amount + newItem.amount >= 4){
                    existingItem.amount = 4
                    existingItem.fullPrice = existingItem.price*4;
                } else {
                existingItem.amount= existingItem.amount + newItem.amount;
                existingItem.fullPrice = existingItem.fullPrice + (newItem.amount*newItem.price);
                }
            }
            state.totalAmount = state.cart.reduce((accumulator, object) => {
                return accumulator + object.fullPrice;
              }, 0);


        },
        finalCart(state, action: PayloadAction<{
            nameOfProduct: string,
            id: string,
    price: number,
    amount: number,
    url: string,
    fullPrice: number
        }>) {
            
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id ===newItem.id )

            if(existingItem){
            existingItem.amount = newItem.amount;
            existingItem.fullPrice= existingItem.price * existingItem.amount;
            }


            state.totalAmount = state.cart.reduce((accumulator, object) => {
                return accumulator + object.fullPrice;
              }, 0);
        },
        removeAll() {
            return {
                cart: [],
                totalAmount: 0
            };
        },
        removeItem(state, action: PayloadAction<{
            nameOfProduct: string,
            id: string,
            url: string,
    price: number,
    amount: number
        }>) { 

            const newItem = action.payload;
            
            state.cart = state.cart.filter((item) => item.id !== newItem.id)

            state.totalAmount = state.cart.reduce((accumulator, object) => {
                return accumulator + object.fullPrice;
              }, 0);

        }
    }
})


export const store = configureStore({
    reducer: cartSlice.reducer
}
  )

  
export const cartActions = cartSlice.actions;
  export default store;

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  