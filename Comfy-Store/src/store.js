import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import userReducer from './features/User/userSlice'

{
  /*whenever we need access we use this reducer */
}
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
})
