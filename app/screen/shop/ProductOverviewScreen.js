import React from 'react'
import { FlatList, Text, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import ProductItem from '../../component/shop/ProductItem'
import * as cartActions from '../../store/actions/cart'

const ProductOverviewScreen = props => {
    const product = useSelector(state => state.product.availableProduct)
    const dispatch = useDispatch()

    return (
        <FlatList
            data={product}
            keyExtractor={ item => item.id }
            renderItem={ itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate('ProductDetail', { 
                            productId: itemData.item.id,
                            productTitle: itemData.item.title 
                        })
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item))
                    }}
                /> 
            )}
        />
    )
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductOverviewScreen