import { SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './Products.style'

const Products = ({ navigation }) => {

    const [data, setData] = useState(null)

    const getProducts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products")
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const dataProduct = await res.json()
            setData(dataProduct);
        } catch (err) {
            alert("Error message: " + err.message)
        }
    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} renderItem={({ item }) => <Text>{item.title}</Text>} />
        </SafeAreaView>
    )
}

export default Products