import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomAvatar from '../../mycomponents/CustomAvatar'

const data = [{ location: 'location', map_image_url: 'imageUrl', recycle_point_image: 'recyclePointImg', recycle_point_name: 'rpName', distance_from_user: 'rpdistance' }, { location: 'location', map_image_url: 'imageUrl', recycle_point_image: 'recyclePointImg', recycle_point_name: 'rpName', distance_from_user: 'rpdistance' }, { location: 'location', map_image_url: 'imageUrl', recycle_point_image: 'recyclePointImg', recycle_point_name: 'rpName', distance_from_user: 'rpdistance' }, { location: 'location', map_image_url: 'imageUrl', recycle_point_image: 'recyclePointImg', recycle_point_name: 'rpName', distance_from_user: 'rpdistance' }, { location: 'location', map_image_url: 'imageUrl', recycle_point_image: 'recyclePointImg', recycle_point_name: 'rpName', distance_from_user: 'rpdistance' }, { location: 'location', map_image_url: 'imageUrl', recycle_point_image: 'recyclePointImg', recycle_point_name: 'rpName', distance_from_user: 'rpdistance' }]
const RecyclePoints = () => {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', flexGrow: 1 }}>
        <CustomAvatar />
        <Text style={styles.textstyle}>Nearby Recycle Points</Text>
        <FlatList data={data} style={styles.flatlist} renderItem={({ item, index }) => {
          return (
            <View style={styles.componentContainer}>
              <View style={styles.componentView1}>
                <Text>{item.recycle_point_image}</Text>
              </View>
              <View style={styles.componentView2}>
                <Text style={styles.componenttext}>{item.recycle_point_name}</Text>
                <View style={styles.componentView3}>
                  <Text>
                    {item.location}
                  </Text>
                </View>
              </View>
            </View>
          )
        }} />
      </View>
    </SafeAreaView>
  )
}

export default RecyclePoints

const styles = StyleSheet.create({
  avatarcontainer:
  {
    marginTop: 10,
    width: '90%',
    height: 50,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  textstyle: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  componentContainer: {
    height: 150,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  componentView1: {
    backgroundColor: "snow",
    width: '40%',
    height: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentView2: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  componentView3: {
    backgroundColor: "pink",
    width: '90%',
    height: '50%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  componenttext: {
    fontSize: 20,
    fontWeight: "600",
  },
  flatlist: {
    width: "90%",
    marginBottom: 60,
  }
})