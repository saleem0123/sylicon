import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import offerSlice from "./offerSlice";
import introSlice from "./introSlice";
import DiscoverproductsSlice from "./DiscoverproductsSlice";
import ProductsSlice from "./ProductsSlice";
import DealSlice from "./DealSlice";
import PopularSlice from "./PopularSlice";
import CartSlice from "./CartSlice";
import BannerSlice from "./BannerSlice";



const persistConfig = {
  key: 'root',
  storage,
  version:1,
}

const rootReducer = combineReducers({
  users : BannerSlice,
  offers :offerSlice,
  Intro: introSlice,
  Category : DiscoverproductsSlice,
  products: ProductsSlice,
  DealItems: DealSlice,
  popularitem: PopularSlice,
  cartadd: CartSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  
})

 const persistor = persistStore(store)
export {store ,persistor};







