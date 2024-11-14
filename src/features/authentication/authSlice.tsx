import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ICart, ICartProduct } from "../../models";
import {registerUser} from "./authActions";

const storage_auth = localStorage.getItem('auth')
if (storage_auth){
    let parsed_auth = JSON.parse(storage_auth)
    console.log('cartSlice storage paresed>>>>', parsed_auth)

}

// Define the initial state using that type
const initialState = {
    userinfo:storage_auth ? JSON.parse(storage_auth).userinfo : {},
    jwt:storage_auth ? JSON.parse(storage_auth).jwt : "",
}
export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        authAddJWT: (state, action: PayloadAction<{userinfo:object,jwt:string}>) => {
            const cur_token = action.payload

            console.log(' slice action, payload before>>>>>', action.payload)
        },
        authClear: (state, action) => {
            state = {
                userinfo: {},
                jwt: "",
            }
        },
        authTest: (state, action) => {
            console.log('cartSlice tedt>>> before', state)
        }
    },
    extraReducers:(builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
                state.userinfo = action.payload
            }
        )
    }


})

export const {
    authTest,
    authAddJWT,
    authClear,
} = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCart = (state: RootState) => state.

export default authSlice.reducer