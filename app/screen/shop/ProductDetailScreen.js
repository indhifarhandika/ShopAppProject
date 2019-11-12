import React from 'react'
import { View, ScrollView, Text, Button, Image, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Color from '../../constants/Color'

import * as cartActions from '../../store/actions/cart'

const ProductDetailScreen = props => {
    // Menerima Parameter dari ProductId
    const productId = props.navigation.getParam('productId')
    // Meload data dari productId
    const selectedProduct = useSelector(state => 
        state.product.availableProduct.find(prod => prod.id === productId)
    )

    const dispatch = useDispatch()
    console.log(selectedProduct)

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.action}>
                <Button
                    color={Color.primary} 
                    title='Add to Cart' 
                    onPress={() => {
                        dispatch(cartActions.addToCart(selectedProduct))
                    }}
                />
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    },
    action: {
        marginVertical: 10,
        alignItems: 'center'
    }
})

export default ProductDetailScreen