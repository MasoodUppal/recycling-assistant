import {TouchableOpacity,Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomAvatar from '../../mycomponents/CustomAvatar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Custombutton from '../../mycomponents/Custombutton'


const Profile = () => {

  const logout=()=>{
    router.replace('/sign_in')
  }
  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <CustomAvatar />
        <View style={styles.container2}>
          <TouchableOpacity style={styles.touch} onPress={()=>(router.push('/profilesetting'))}>
            <Text style={styles.text1}>Profile Setting</Text>
            <Image 
              source={require('../../assets/icons/right-arrow.png')}
              style={{width:20,height:20}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={()=>(router.push('/security'))}>
            <Text style={styles.text1}>Security Settings</Text>
            <Image 
              source={require('../../assets/icons/right-arrow.png')}
              style={{width:20,height:20}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={()=>(router.push('/leaderboard'))}>
            <Text style={styles.text1}>LeaderBoard</Text>
            <Image 
              source={require('../../assets/icons/right-arrow.png')}
              style={{width:20,height:20}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={()=>(router.push('/support'))}>
            <Text style={styles.text1}>Customer Support</Text>
            <Image 
              source={require('../../assets/icons/right-arrow.png')}
              style={{width:20,height:20}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={()=>(router.push('/policy'))}>
            <Text style={styles.text1}>Privacy and policy</Text>
            <Image 
              source={require('../../assets/icons/right-arrow.png')}
              style={{width:20,height:20}}
            />
          </TouchableOpacity>
        </View>
        <Custombutton 
          title="logout"
          containerStyles={{backgroundColor:'teal',marginTop:60}}
          handlePress={logout}
        />
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container2:{
    marginTop:30,
    width:'90%',
    alignItems:'center'
  },
  touch:{
    flexDirection:'row',
    width:'80%',
    height:50,
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomWidth:1,
    marginVertical:5,
  },
  text1:{
    fontSize:20,
  }

})