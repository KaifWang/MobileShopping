import { configureStore, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "@/components/CartItem";

export interface CartState {
    cartItems: CartItemDicionary
}

export interface CartItemDicionary {
    [key: number] : CartItem
}

const initialState : CartState = {
    cartItems: {}
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addOneToCart:(state, action) => {
            const idToAdd = action.payload.id;
            const cartItem = state.cartItems[idToAdd]
            if(cartItem){
                cartItem.count += 1
            }else{
                state.cartItems[idToAdd] = {...action.payload, count: 1}
            }
        },
        removeOneFromCart: (state, action) => {
            const idToRemove = action.payload.id;
            const cartItem = state.cartItems[idToRemove]
            if(cartItem){
                cartItem.count -= 1;
                if(cartItem.count <= 0){
                    delete state.cartItems[idToRemove]
                }
            }
        }
    }
})

export const cartStore = configureStore({
    reducer: cartSlice.reducer
})

export const { addOneToCart, removeOneFromCart } = cartSlice.actions

