import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomAvatar from '../../mycomponents/CustomAvatar'
import FormField from '../../mycomponents/FormField'
import Custombutton from '../../mycomponents/Custombutton'

const security = () => {
  const oldPass=null
  const [oldpassword, setoldpassword] = useState(oldPass)
  const [newpassword, setnewpassword] = useState(null)

  const handlechangepass= ()=>{
    console.log('old pass',oldpassword)
    console.log('NEW pass',newpassword)
  }

  return (
    <SafeAreaView>
      <View style={styles.container1}>
      <CustomAvatar  addStyles={styles.avatar}/>
      <FormField 
            title="Old password"
            placeholder='old password'
            handleChangeText={(e)=>{setoldpassword(e)}}
            // otherStyles={{marginTop:7}}
          />
          <Text style={styles.middleText}>New</Text>
          <FormField 
            title="Password"
            placeholder='password'
            value={newpassword}
            handleChangeText={(e)=>{setnewpassword(e)}}
            // otherStyles={{marginTop:7}}
          />
          <Custombutton
          title="Change Password"
          containerStyles={styles.butoon1}
          textStyles={styles.buttonText}
          handlePress={handlechangepass}
        />
      </View>

    </SafeAreaView>
  )
}

export default security

const styles = StyleSheet.create({
  container1:{
    flexGrow:1,
  },
  avatar:{
    alignSelf:'center',
  },
  middleText:{
    alignSelf:'center',
    fontSize:20,
    fontWeight:'500',
    color:'pink',
  },
  butoon1: {
    alignSelf: "flex-end",
    marginRight: 30,
    width: 150,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 15,
  },
})