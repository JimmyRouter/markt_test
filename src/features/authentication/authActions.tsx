import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {MY_API_ENDPOINT} from "../../constants";


export const registerUser = createAsyncThunk(
    'auth/register',
    async (props:{username:string, password:string}, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${MY_API_ENDPOINT}/auth/register`,
                {...props},
                config
            )
        }
        catch (e){
            console.log('authActions error',e)
            return rejectWithValue(e)
        }
    }
)