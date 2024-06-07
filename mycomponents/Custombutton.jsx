import { TouchableOpacity,View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Custombutton = ({title,handlePress,containerStyles,textStyles,isLoading}) => {
  const opacity=isLoading ? 0.4 : 0.7;
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={opacity}
    disabled={isLoading}
    style={[styles.button1,containerStyles,]}>
      <Text style={[styles.text1,textStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Custombutton;

const styles= StyleSheet.create({
    button1:{
        width:'50%',
        backgroundColor:'green',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf:'center',
        padding: 10,
        marginHorizontal:40,
    },
    text1:{
      fontSize:25,
      fontWeight:'bold',
      color:'white',
      
    },
})