import React, { useState } from 'react'

import { StyleSheet, SafeAreaView, Text, View, Image, TextInput, FlatList } from 'react-native'

import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';

import { colors } from '../assets/colors/colors';
import person from "../assets/images/profile.png";
import CategoriesData from "../assets/data/categoriesData";

import CategoriesCard from '../components/CategoriesCard';
import PopularData from '../assets/data/popularData';
import PopularCard from '../components/PopularCard';

const Home = (props) => {
    const [search, setSearch] = useState('');  

    const CategoriesCards = ({ item }) => {
        return (
            <CategoriesCard 
                image={item.image}
                title={item.title}
                selected={item.selected}
                id={item.id}
            />
        )
    }

    const PopularCards = ({ item }, props) => {
        return (
            <PopularCard 
                id={item.id}
                image={item.image}
                title={item.title}
                weight={item.weight}
                rating={item.rating}
                nav={props}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.widthContainer}>
                <View style={styles.header}>
                    <Image source={person} style={{ width: 50, height: 50, borderRadius: 50}}/>
                    <SimpleLineIcons name="menu" size={24} color="black" />
                </View>
                <View style={styles.delivery}>
                    <Text style={{ fontFamily: 'regular', fontSize: 16}}>Food</Text>
                    <Text style={{ fontFamily: 'bold', fontSize: 32}}>Delivery</Text>
                </View>
                <View style={styles.input}>
                    <Ionicons name="md-search-outline" size={24} color="black" />
                    <TextInput 
                        placeholder='Search...'
                        onChangeText={setSearch}
                        value={search}
                        style= {{
                            width: '90%',
                            height: 20,
                            color: colors.textLight,
                            paddingHorizontal: 2,
                            paddingVertical: 10,
                            borderBottomColor: colors.textLight,
                            borderBottomWidth: 1,
                            fontFamily: 'medium',
                            fontSize: 14,
                        }}
                    />
                </View>
                <View style={styles.categories}>
                    <Text
                        style={{
                            fontFamily: 'bold',
                            fontSize: 24,
                            marginVertical: 10
                        }}
                    >
                        categories
                    </Text>
                    <View 
                        style={{
                            width: '100%',
                            justifyContent: 'space-between',
                        }}
                    >
                        <FlatList 
                            data={CategoriesData}
                            renderItem={CategoriesCards}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                </View>
                <View 
                    style={{
                        ...styles.popular,
                        ...styles.categories
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'bold',
                            fontSize: 24,
                            marginVertical: 10
                        }}
                    >
                        Popular
                    </Text>
                    <View 
                        style={{
                            width: '100%'
                        }}
                    >
                        <FlatList 
                            data={PopularData}
                            renderItem={({ item }) => PopularCards({ item }, props)}
                            keyExtractor={item => item.id}
                            horizontal={false}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9FB',
    },
    widthContainer: {
      width: '90%',
      marginHorizontal: 'auto',
    },
    header: {
      marginVertical: 30,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    delivery: {
      width: '100%',
      justifyContent: 'flex-start'
    },
    input: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    categories: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 10,
    },
});