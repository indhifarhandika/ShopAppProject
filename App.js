import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import productReducer from './app/store/reducers/product'
import cartReducer from './app/store/reducers/cart'
import ShopNavigator from './app/navigation/ShopNavigator'

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
})
 
const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
    )
  }
}