import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import productReducer from './app/store/reducers/product'
import ShopNavigator from './app/navigation/ShopNavigator'

const rootReducer = combineReducers({
  product: productReducer
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