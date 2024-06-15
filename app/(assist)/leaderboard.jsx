import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomAvatar from '../../mycomponents/CustomAvatar'

const leaderboard = () => {

  const avatar=require('../../assets/avatar/man.png')
  const data=[
    {position:1,image:avatar,name:'name',points:20},
    {position:2,image:avatar,name:'name',points:20},
    {position:3,image:avatar,name:'name',points:20},
    {position:4,image:avatar,name:'name',points:20},
    {position:5,image:avatar,name:'name',points:20},
    {position:6,image:avatar,name:'name',points:20},
    {position:1,image:avatar,name:'name',points:20},
    {position:2,image:avatar,name:'name',points:20},
    {position:3,image:avatar,name:'name',points:20},
    {position:4,image:avatar,name:'name',points:20},
    {position:5,image:avatar,name:'name',points:20},
    {position:6,image:avatar,name:'name',points:20},
    {position:1,image:avatar,name:'name',points:20},
    {position:2,image:avatar,name:'name',points:20},
    {position:3,image:avatar,name:'name',points:20},
    {position:4,image:avatar,name:'name',points:20},
    {position:5,image:avatar,name:'name',points:20},
    {position:6,image:avatar,name:'name',points:20},
    {position:1,image:avatar,name:'name',points:20},
    {position:2,image:avatar,name:'name',points:20},
    {position:3,image:avatar,name:'name',points:20},
    {position:4,image:avatar,name:'name',points:20},
    {position:5,image:avatar,name:'name',points:20},
    {position:6,image:avatar,name:'name',points:20},
  ]

  return (
    <SafeAreaView>
      <View>
        <CustomAvatar addStyles={{alignSelf:'center'}}/>
        <Text style={styles.heading}>LeaderBoard</Text>
        <FlatList 
          data={data}
          style={styles.flatlist}
          renderItem={({item})=>{
            return(
              <View style={styles.flatlistContainer}>
                <Text style={styles.position}>{item.position}</Text>
                <Image 
                  source={item.image}
                  style={{width:50,height:50}}
                />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.point}>{item.points}</Text>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default leaderboard

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginLeft: 30,
    marginVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  flatlist:{
    width:'100%',
  },
  flatlistContainer:{
    flexDirection:'row',
    width:"85%",
    height:60,
    alignSelf:'center',
    alignItems:'center',
    // justifyContent:'space-around',
    borderBottomWidth:1,
    borderBottomColor:'gray',
    marginVertical:5,
    gap:5,
  },
  position:{
    flexGrow:1,
    textAlign:'center',
  },
  name:{
    flexGrow:3,
  },
  point:{
    flexGrow:2,
    textAlign:'center',
  }
})