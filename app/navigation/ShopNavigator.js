import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'

import ProductOverviewScreen from '../screen/shop/ProductOverviewScreen'
import Color from '../constants/Color'
import ProductDetailScreen from '../screen/shop/ProductDetailScreen'

const ProductNavigator = createStackNavigator({
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen  
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primary : ''
        },
        headerTintColor: Platform.OS === 'ios' ? 'white' : Color.primary
    }
})

export default ProductNavigator