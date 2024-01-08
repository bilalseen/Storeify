import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Products.style'

const Products = ({ navigation }) => {
    const navigateToDetail = () => {
        navigation.navigate("DetailScreen")
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text>Products Page...</Text>
            <TouchableOpacity onPress={navigateToDetail}>
                <Text style={{ color: "blue", fontSize: 18, marginVertical: 20, borderWidth: 1, borderColor: "black", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                    Go to detail page
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Products