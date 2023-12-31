'use client'

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { cart } from './features'

const reducers = combineReducers({ cart })

const config = {
  key: 'root',
  storage,
}

const reducer = persistReducer(config, reducers)

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export default store
