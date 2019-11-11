import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector(state => 
        state.product.availableProduct.find(prod => prod.id === productId)
    )
    console.log(productId)

    return (
        <View>
            <Text>{selectedProduct.title}</Text>
        </View>
    )
}

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({})

export default ProductDetailScreen