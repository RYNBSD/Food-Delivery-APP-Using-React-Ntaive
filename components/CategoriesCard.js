import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'; 

import { colors } from '../assets/colors/colors';

const CategoriesCard = ({ image, title, selected, id }) => {
  return (
    <View style={{
        ...styles.container, 
        backgroundColor: selected ? colors.primary : '#fff',
        marginLeft: id !== 1 ? 20 : 0
      }}
    >
      <View>
        <Image source={image} style={{ width: 60, height: 60 }} />
      </View>
      <View>
        <Text
          style= {{
            fontFamily: 'bold',
            fontSize: 14,
            marginVertical: 10
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{
        ...styles.circle,
        backgroundColor: selected ? colors.background : colors.secondary
        }}
      >
        <MaterialIcons name="keyboard-arrow-right" size={24} color={ selected ? colors.textDark : colors.background } />
      </View>
    </View>
  )
}

export default CategoriesCard

const styles = StyleSheet.create ({
  container: {
    width: 105,
    paddingVertical: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})