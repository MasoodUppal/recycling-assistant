import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../mycomponents/FormField'
import Custombutton from '../../mycomponents/Custombutton'
import { Link, router,useRouter } from 'expo-router'

const SignUP = () => {
  const [form, setform] = useState({
    username: '',
    email: '',
    contact: '',
    password: '',
  })
  // const router=useRouter()
  const submit = () => {
    console.log(form)
    router.push({
      pathname:'./sign_up2',
      params:{...form},
    });
  }

  return (
    <SafeAreaView style={styles.safeareaviewstyle}>
      <ScrollView contentContainerStyle={{ height: '125%' }}>
        <View style={styles.viewstyle}>
          <Text style={styles.textstyle}>Create an Account</Text>

          <FormField
            title="Username"
            placeholder='Recycle karo'
            value={form.username}
            handleChangeText={(e) => setform({ ...form, username: e })}
            otherStyles={{ marginTop: 0 }}
          />
          <FormField
            title='Phone No.'
            placeholder="+92 000-0000000"
            value={form.contact}
            handleChangeText={(e) => setform({ ...form, contact: e })}
            keyboardType="phone-pad"
          />
          <FormField
            title="Email"
            placeholder='email@gmail.com'
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles={{ marginTop: 0 }}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder='password'
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles={{ marginTop: 0 }}
          />
        </View>

        <Custombutton
          containerStyles={{ marginTop: 40 }}
          title={'Continue'}
          handlePress={submit}
        />

        <View style={styles.view}>
          <Text style={styles.text2}>
            Already have an Account
          </Text>
          <Link href='/sign_in' style={styles.link}>Sign-in</Link>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUP

const styles = StyleSheet.create({
  safeareaviewstyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  viewstyle: {
    // backgroundColor: 'yellow',
    marginTop: 30,
    gap: 5,
  },
  textstyle: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  view: {
    alignItems: 'center',
    justifyContent: "center",
    // backgroundColor:'pink',
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    gap: 10,
  },
  text2: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray'
  },
  link: {
    fontSize: 20,
    fontWeight: "800",
    color: 'green',
  }
})