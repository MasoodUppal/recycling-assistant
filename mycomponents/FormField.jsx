import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const eye = require('../assets/icons/eye.png')
const eyenot = require('../assets/icons/eyenot.png')


const FormField = ({ title, value, placeholder, handleChangeText, keyboardType, otherStyles,textStyles, ...props }) => {
  const [showpassword, setshowpassword] = useState(false);
  return (
    <View style={[styles.viewstyle1,otherStyles]}>
      <Text style={[styles.text1,textStyles]}>{title}</Text>
      <View style={styles.viewstyle2}>
        <TextInput style={styles.text2}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='gray'
          keyboardType={keyboardType}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showpassword}
        />
        {title === 'Password' && (
          <TouchableOpacity
          onPress={() => { setshowpassword(!showpassword) }}>
            <Image
              source={!showpassword ? eye : eyenot}
              resizeMode='contain'
              style={styles.eye}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
  viewstyle1: {
    margin: 15,
  },
  viewstyle2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 50,
    width:'90%',
    // borderWidth: 5,
    // borderColor: 'gray',
    // borderStyle: 'solid',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 10,
    shadowRadius: 2,
    elevation: 10, // Android shadow
  },
  text1: {
    // textAlign: 'center',
    marginLeft:15,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text2: {
    flex: 1,
    marginHorizontal: 20,
    color: 'black',
    fontSize: 18,
  },
  eye: {

    width: 25,
    height: 25,
    alignSelf: 'center',
    marginRight:15,
    tintColor:'green',
  }
})