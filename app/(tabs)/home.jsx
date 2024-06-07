import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Custombutton from '../../mycomponents/Custombutton'
import { useRouter,router } from 'expo-router'
import CustomAvatar from '../../mycomponents/CustomAvatar'


const Home = () => {

  return (
    <SafeAreaView style={styles.safeareaviewstyle}>
      <ScrollView contentContainerStyle={{ height: '110%' }}>

        <View style={styles.parentcontainer}>
          <CustomAvatar />

          <View style={{ backgroundColor: 'teal', width: 300, height: 120, borderRadius: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', gap: 10, marginVertical: 10 }}>
            <Text style={{ backgroundColor: 'teal', width: 50, height: 50, textAlign: 'center' }}>points</Text>
            <Text style={{ backgroundColor: 'white', width: 5, height: 70, }}></Text>
            <Text style={{ backgroundColor: 'teal', width: 50, height: 50, textAlign: 'center' }}>recyclabe objects</Text>
          </View>

          <View style={{}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 0 }}>Materials</Text>
            <View style={{ width: 300, height: 100, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text style={{ backgroundColor: "#EEEEEE", borderRadius: 10, width: 65, height: 65, textAlign: 'center' }}>material information</Text>
              <Text style={{ backgroundColor: "#EEEEEE", borderRadius: 10, width: 65, height: 65, textAlign: 'center' }}>material information</Text>
              <Text style={{ backgroundColor: "#EEEEEE", borderRadius: 10, width: 65, height: 65, textAlign: 'center' }}>material information</Text>
              <Text style={{ backgroundColor: "#EEEEEE", borderRadius: 10, width: 65, height: 65, textAlign: 'center' }}>material information</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', width: 300 }}>
            <Custombutton
              containerStyles={{ backgroundColor: '#31363F', width: 130, height: 50, borderRadius: 5, marginHorizontal: 10, justifyContent: 'center', padding: 5 }}
              textStyles={{ fontSize: 14 }}
              title={'Request Disposal'}
            />
            <Custombutton
              containerStyles={{ backgroundColor: '#31363F', width: 130, height: 50, borderRadius: 5, marginHorizontal: 10, justifyContent: 'center', padding: 5 }}
              textStyles={{ fontSize: 14 }}
              title={'Shop'}
            />
          </View>
          <View style={{ backgroundColor: '#EEEEEE', width: 300, height: 150, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 20 }}>
            <Text>Next vehicle will arive at</Text>
            <Text>Day</Text>
            <Text>Date </Text>
          </View>

          <View style={{}}>
            <Custombutton
              containerStyles={{ backgroundColor: '#31363F', width: 130, height: 50, borderRadius: 5, marginHorizontal: 10, justifyContent: 'center', padding: 5 }}
              textStyles={{ fontSize: 14 }}
              title={'Track it'}
            />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeareaviewstyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  parentcontainer: {
    backgroundColor: 'white',
    flex: 1,
    gap: 12,
    alignItems: 'center',
  },
})