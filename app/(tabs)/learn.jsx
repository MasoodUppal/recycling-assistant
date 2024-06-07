import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomAvatar from '../../mycomponents/CustomAvatar'

const Learn = () => {
  return (
    <View style={{justifyContent:'center',flex:1,alignItems: 'center'}}>
      <CustomAvatar />
      <Text>Learn</Text>
    </View>
  )
}

export default Learn

const styles = StyleSheet.create({})