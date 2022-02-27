import {configureStore} from '@reduxjs/toolkit'
import Products from './Get-Data-API/GetData'

const Store = configureStore({
    reducer: {
        Products,
    }
})

export default Store;