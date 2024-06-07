import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../mycomponents/FormField'
import Custombutton from '../../mycomponents/Custombutton'
import { Link, router } from 'expo-router'

const SignIN = () => {
  const [form, setform] = useState({
    email:'',
    password:'',
  })

const submit=()=>{
  router.push('/home');
}  

  return (
    <SafeAreaView style={styles.safeareaviewstyle}>
      <ScrollView contentContainerStyle={{ height: '110%' }}>
        <View style={styles.viewstyle}>
          <Text style={styles.textstyle}>Login to Existing Account</Text>

          <FormField 
            title="Email"
            placeholder='email@gmail.com'
            value={form.email}
            handleChangeText={(e)=>setform({...form,email: e})}
            // otherStyles={{marginTop:7}}
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            placeholder='password'
            value={form.password}
            handleChangeText={(e)=>setform({...form,password: e})}
            // otherStyles={{marginTop:7}}
          />
        </View>

        <Custombutton 
          containerStyles={{marginTop:40}}
          title={'Continue'}
          handlePress={submit}
        />

        <View style={styles.view}>
          <Text style={styles.text2}>
            Don't have an Account
          </Text>
          <Link href='/sign_up' style={styles.link}>Sign-Up</Link>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIN

const styles = StyleSheet.create({
  safeareaviewstyle:{
    backgroundColor: 'white',
    flex:1,
  },
  viewstyle:{
    // backgroundColor: 'yellow',
    marginTop:30,
    gap:5,
  },
  textstyle:{
    marginVertical:40,
    fontSize:30,
    fontWeight:'bold',
    alignSelf:'center',
  },
  view:{
    alignItems: 'center',
    justifyContent: "center",
    // backgroundColor:'pink',
    margin:20,
    padding:10,
    flexDirection: 'row',
    gap:10,
  },
  text2:{
    fontSize:15,
    fontWeight:'500',
    color:'gray'
  },
  link:{
    fontSize:20,
    fontWeight:"800",
    color: 'green',
  }
})