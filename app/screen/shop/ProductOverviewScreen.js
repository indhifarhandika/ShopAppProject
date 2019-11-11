import React from 'react'
import { FlatList, Text, Platform } from 'react-native'
import { useSelector } from 'react-redux'

import ProductItem from '../../component/shop/ProductItem'

const ProductOverviewScreen = props => {
    const product = useSelector(state => state.product.availableProduct)
    console.log(Platform.OS)
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
                    onAddToCart={() => {}}
                /> 
            )}
        />
    )
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductOverviewScreen