import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Customdropdown from '../../mycomponents/Customdropdown'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../mycomponents/FormField'
import Custombutton from '../../mycomponents/Custombutton'
import { Link, router,useRouter, useLocalSearchParams } from 'expo-router'

const options = [{ option: 'apple' }, { option: 'mango' }, { option: 'bananaa' }, { option: 'strawberry' }, { option: 'cheerry' }]


const sign_up2 = () => {
  const param = useLocalSearchParams();
  // const router = useRouter()

  const [form, setform] = useState({
    ...param,
    province: '',
    city: '',
    district: '',
  })
  const handleSelect = (key, value) => {
    setform((prevForm) => ({
      ...prevForm,
      [key]: value,
    }))
  }
  // const submit = () => {
  //   console.log(form);
  //   router.push('/home');
  // }
  const submit = async () => {
    const transformedForm = {
      name: form.username,
      email: form.email,
      password: form.password,
      phoneNo: form.contact,
      user_type: 'event organizer', // Assuming userType is constant. Adjust if needed.
      location: {
        province: form.province,
        district: form.district,
        city: form.city,
      },
    };
    console.log('1st',transformedForm);
    console.log(JSON.stringify(transformedForm))

    // try {
    //   const response = await fetch('https://optimum-ultimately-sturgeon.ngrok-free.app/user/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(transformedForm),
    //   });
    //   const result = await response.json();
    //   console.log('Response:', result);
      router.replace('/home');
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };


  return (
    <SafeAreaView style={styles.SafeAreaViewstyle}>
      <View style={styles.stylecontainer1}>
        <Text style={styles.textstyle}>Login to Existing Account</Text>

        <Customdropdown
          optionObjectArr={options}
          title='Select province'
          selectPlaceholder="select province"
          onselect={(value) => handleSelect('province', value)}
        />
        <Customdropdown
          optionObjectArr={options}
          title='Select district'
          selectPlaceholder="select district"
          onselect={(value) => handleSelect('district', value)}
        />
        <Customdropdown
          optionObjectArr={options}
          title='Select City'
          selectPlaceholder="select City"
          onselect={(value) => handleSelect('city', value)}
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
    </SafeAreaView>
  )
}

export default sign_up2

const styles = StyleSheet.create({
  SafeAreaViewstyle: {
    backgroundColor: 'snow',
    flexGrow: 1,
  },
  stylecontainer1: {
    alignItems: 'center',
    // flexGrow: 1,
  },
  textstyle: {
    marginVertical: 40,
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
    color: 'gray',
  },
  link: {
    fontSize: 20,
    fontWeight: "800",
    color: 'green',
  }
})