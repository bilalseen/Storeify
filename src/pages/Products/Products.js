import { SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './Products.style'
import LottieView from 'lottie-react-native'


const Products = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    const getProducts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const dataProduct = await res.json()
            setData(dataProduct);
            setLoading(false)
        } catch (err) {
            alert("Error message: " + err.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    if (loading) {
        return (
            <LottieView source={require("../../../assets/loading.json")} autoPlay loop />
        )
    }



    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} renderItem={({ item }) => <Text>{item.title}</Text>} />
        </SafeAreaView>
    )
}

export default Products