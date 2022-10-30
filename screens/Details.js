import React from 'react'

import { StyleSheet, SafeAreaView, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'

import { MaterialIcons, Entypo } from '@expo/vector-icons';

import PopularData from '../assets/data/popularData';
import { colors } from '../assets/colors/colors';

const Details = ({ route, navigation }) => {
    
    const { id } = route.params;

    let pizza = PopularData.filter(data => data.id === id);
    pizza = pizza[0];
    
    //console.log(pizza);

    const renderIngredients = ({ item }) => {
        return (
            <View 
                style={{ 
                    width: 100, 
                    height: 80, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    marginLeft: item.id !== 1 ? 15 : 0,
                    marginVertical: 20
                }}
            >
                <Image 
                    source={item.image} 
                    style={{ 
                        width: 80,
                        height: 80,
                        resizeMode: 'contain'
                    }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.widthContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                        <View 
                            style={{ 
                                borderColor: '#fff', 
                                padding: 10, 
                                borderWidth: 3, 
                                borderRadius: 10 
                            }}
                        >
                            
                            <MaterialIcons name="keyboard-arrow-left" size={18} color="black" />
                        </View>
                    </TouchableOpacity>
                    <View 
                        style={{ 
                            backgroundColor: colors.primary, 
                            padding: 10,
                            borderRadius: 10
                        }}
                    >
                        <Entypo name="star" size={18} color="white" />
                    </View>
                </View>
                <View>
                    <Text style={{fontFamily: 'bold', fontSize: 32}}>{pizza.title}</Text>
                    <Text style={{fontFamily: 'bold', fontSize: 32}}>Pizza</Text>
                    <Text 
                        style={{
                            fontFamily: 'bold', 
                            fontSize: 32, 
                            color: colors.price,
                            marginVertical: 20
                        }}
                    >
                        ${pizza.price}
                    </Text>
                </View>
                <View style={{marginVertical: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '50%' }}>
                        <View style={{marginVertical: 20}}>
                            <Text style={{ fontFamily: 'medium', fontSize: 14, color: colors.textLight }}>Size</Text>
                            <Text style={{ fontFamily: 'bold', fontSize: 16, color: colors.textDark }}>{pizza.sizeName}</Text>
                        </View>
                        <View style={{marginVertical: 20}}>
                            <Text style={{ fontFamily: 'medium', fontSize: 14, color: colors.textLight }}>Crust</Text>
                            <Text style={{ fontFamily: 'bold', fontSize: 16, color: colors.textDark }}>{pizza.crust}</Text>
                        </View>
                        <View style={{marginVertical: 20}}>
                            <Text style={{ fontFamily: 'medium', fontSize: 14, color: colors.textLight }}>Delivery in</Text>
                            <Text style={{ fontFamily: 'bold', fontSize: 16, color: colors.textDark }}>{pizza.deliveryTime} min</Text>
                        </View>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Image source={pizza.image} style={{ width: 296, height: 176, resizeMode: 'contain'}}/>
                    </View>
                </View>
                <View>  
                    <Text style={{ fontFamily: 'bold', fontSize: 17, color: colors.textDark }}>Ingredients</Text>
                    <View style={{flexDirection: 'row'}}>
                        <FlatList 
                            data={pizza.ingredients}
                            renderItem={renderIngredients}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                        />
                    </View>
                </View>
                <View 
                    style={{
                        backgroundColor: colors.primary, 
                        width: '90%', 
                        height: 62, 
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 56,
                        marginBottom: 20,
                        marginHorizontal: 'auto'
                    }}
                >
                    <Text style={{ fontFamily: 'bold', fontSize: 17, color: colors.textDark, marginRight: 5 }}>Place an order</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: '#F9F9FB',
    },
    widthContainer: {
        width: "90%",
        marginHorizontal: 'auto',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    }
})