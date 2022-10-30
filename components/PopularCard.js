import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons, Entypo  } from '@expo/vector-icons';

import { colors } from '../assets/colors/colors'


const PopularCard = ({ id, image, title, weight, rating, nav }) => {
  return (
    <TouchableOpacity onPress={() => nav.navigation.navigate('Details', {
        id: id
    })}>
        <View style={styles.container}>
            <View 
                style={{
                    width: '45%', 
                    position: 'relative', 
                    marginLeft: 10,
                    marginTop: 10
                }}
            >
                <View 
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <MaterialCommunityIcons name="crown" size={18} color={colors.primary} />
                    <Text 
                        style={{ 
                            fontSize: 14, 
                            fontWeight: 'bold', 
                            marginLeft: 5
                        }}
                    >
                        Top of the week
                    </Text>
                </View>
                <View style={{marginVertical: 22.5}}>
                    <Text 
                        style={{
                            fontSize: 14, 
                            fontFamily: 'bold', 
                            color: colors.textDark
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 12, 
                            fontFamily: 'medium', 
                            color: colors.textLight
                        }}               
                    >
                        Weight {weight}
                    </Text>
                </View>
            </View>
            <View 
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
                >        
                <View
                    style={{
                        width: 90,
                        height: 53, 
                        backgroundColor: '#F5CA48',                     
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,
                    }}
                >
                    <Entypo name="plus" size={24} color="black" />
                </View>
                <View 
                    style={{
                        flexDirection: 'row', 
                        alignItems: 'centre',
                        justifyContent: 'center',
                        marginLeft: 20
                    }}
                >
                    <Entypo name="star" size={12} color="black" />
                    <Text
                        style={{
                            fontFamily: 'bold',
                            fontSize: 12,
                            marginLeft: 2.5,
                        }}
                    >
                        {rating}
                    </Text>
                </View>
            </View>
            <View style={{width: '45%', marginTop: 20}}>
                <Image source={image} style={{width: 210, height: 125, resizeMode: 'contain'}}/>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default PopularCard

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#fff',
        width: '90%',
        height: 161,
        marginVertical: 10,  
        borderRadius: 20,   
        marginHorizontal: 'auto',   
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden'
    },
});