import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect, router } from 'expo-router';
import Custombutton from '../mycomponents/Custombutton';


const recycleIcon = require('../assets/icons/recycle.png')
const recycleLogo = require('../assets/icons/text_logo.png')
const App = () => {
  return (
    <>
      <SafeAreaView >
        <ScrollView contentContainerStyle={{ height: '110%' }}>
          <View style={styles.container1}>
            {/* <Text style={styles.container2}>Recycle Karo</Text> */}
            <Image
              source={recycleLogo}
              resizeMode='contain'
              style={{ width: 250, height: 100 }}
            />
          </View>
          <View style={{ alignItems: 'center', margin: 20 }}>
            <Image
              source={recycleIcon}
              resizeMode='contain'
              style={{ width: 120, height: 120 }}
            />
          </View>
          {/* <View style={styles.container1}>
              <Link href="home" style={{fontSize: 30,fontWeight:'bold',color:'orange'}}>Go to Home</Link>
            </View> */}
          <View>
            <Custombutton title={'home'} handlePress={() => { router.push('/home') }} containerStyles={{ marginVertical: 30 }} />
            <Custombutton
              title={'Sign In'}
              handlePress={() => { router.push('/sign_in') }}
            />

          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='dark' />
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container1: {
    marginTop: 150,
    alignItems: 'center',
    // borderWidth:2,
    // borderColor: 'blue',
  },
  container2: {
    fontSize: 40,
    fontWeight: 'bold',
  }
})