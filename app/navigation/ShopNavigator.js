import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'

import ProductOverviewScreen from '../screen/shop/ProductOverviewScreen'
import Color from '../constants/Color'

const ProductNavigator = createStackNavigator({
    ProductOverview: ProductOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primary : ''
        },
        headerTintColor: Platform.OS === 'ios' ? 'white' : Color.primary
    }
})

export default ProductNavigator