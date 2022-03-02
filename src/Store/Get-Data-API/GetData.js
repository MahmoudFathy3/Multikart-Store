import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const getProducts = createAsyncThunk('Products/getProducts', async (lang,thunkAPI)=> {
    const {rejectWithValue} = thunkAPI
    try{
        const res = await axios.get('http://localhost:4000/lang');
        if(lang === 'en'){
            return res.data.en
        } else if(lang === 'ar'){
            return res.data.ar
        } else {
            alert('Error')
            return 'Sorry Select Your Language'
        }
    }
    catch(error){
        return rejectWithValue(error.message)
    }
})

const Products = createSlice({
    name: 'products',
    initialState: {products: [], isLoading: true, isError: null, isLanguage: 'en'},
    reducers: {
        isLanguage: (state,action)=>{
            state.isLanguage = action.payload
        }
    },
    extraReducers: {
        // Get All Data With API 
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.products  = action.payload;
        },
        [getProducts.rejected]: (state,action) => {
            state.isLoading = false;
            state.isError= action.payload
        }
    },
})

export const {isLanguage} = Products.actions
export default Products.reducer;