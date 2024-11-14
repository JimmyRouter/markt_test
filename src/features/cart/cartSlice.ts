import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ICart, ICartProduct } from "../../models";

const storage_prods = localStorage.getItem('cart')
console.log('cartSlice storage prods>>>>', typeof storage_prods)
if (storage_prods){
    let parsed: ICartProduct[] = JSON.parse(storage_prods)
    console.log('cartSlice storage paresed>>>>', parsed)

}

// Define the initial state using that type
const initialState: ICart = {
    products:storage_prods ? JSON.parse(storage_prods) : []
}
export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        cartAddProd: (state, action: PayloadAction<ICartProduct>) => {
            const prodds = [...state.products]
            console.log(' slice action, payload before>>>>>', action.payload)
            const indx = prodds.indexOf(action.payload)
            console.log(' slice addprod, indx>>>>>', indx)

            if (indx >= 0){
                prodds[indx].amount += action.payload.amount
            } else {
                prodds.push(action.payload)
            }

            console.log(' slice addprod, prodds after>>>>>', prodds)
            state.products = prodds
            console.log(' slice state, prodds after>>>>>', state.products)
        },
        cartDelProd: (state, action: PayloadAction<ICartProduct>) => {
            let prodds = [...state.products]
            prodds.splice(prodds.indexOf(action.payload), 1)
            state.products = prodds
        },
        cartClear: (state, action) => {
            state.products = []
        },
        cartTest: (state, action) => {
            console.log('cartTest')
            console.log('cartSlice tedt>>> before', state)
            let prodds = [...state.products]

        }
    },
})

export const {
    cartAddProd,
    cartDelProd,
    cartClear,
    cartTest,
                } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCart = (state: RootState) => state.

export default cartSlice.reducer