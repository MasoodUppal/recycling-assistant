import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
//importing icons
import home from '../../assets/icons/home.png'
import learn from '../../assets/icons/learn.png'
import scan from '../../assets/icons/scan.png'
import rpoint from '../../assets/icons/rpoint.png'
import profile from '../../assets/icons/profile.png'



const TabIcon = ({icon,color,focused,name})=>{
  const iconColor = focused ? 'teal' : 'gray';
  const iconSize = focused ? 40 : 30;
  return(
    <View style={{alignItems:'center',justifyContent:'center',marginBottom:10}}>
      <Image 
      source={icon}
      resizeMode='contain'
      focused={focused}
      tintColor={iconColor}
      style={{width : iconSize, height: 50,}}
      />
      <View>
        <Text style={{color:iconColor}}>{name}</Text>
      </View>
    </View>
  )
}

const TabLayout = () => {
  return (
    <>
        <Tabs 
          screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
              height: 75,
            }
          }
          }
        >
            <Tabs.Screen 
                name="home"
                options={{
                    title:'Home',
                    headerShown : false,
                    tabBarIcon : ({color,focused})=>(
                      <TabIcon 
                        icon={home}
                        color={color}
                        name='Home'
                        focused={focused}
                      />
                    ),
                }}
            />

            <Tabs.Screen 
                name="rpoints"
                options={{
                    title:'rpoints',
                    headerShown : false,
                    tabBarIcon : ({color,focused})=>(
                      <TabIcon 
                        icon={rpoint}
                        color={color}
                        name='R-points'
                        focused={focused}
                      />
                    ),
                }}
            />
            <Tabs.Screen 
                name="scan"
                options={{
                    title:'scan',
                    headerShown : false,
                    tabBarIcon : ({color,focused})=>(
                      <TabIcon 
                        icon={scan}
                        color={color}
                        name='Scan'
                        focused={focused}
                      />
                    ),
                }}
            />
            <Tabs.Screen 
                name="learn"
                options={{
                    title:'learn',
                    headerShown : false,
                    tabBarIcon : ({color,focused})=>(
                      <TabIcon 
                        icon={learn}
                        color={color}
                        name='Learn'
                        focused={focused}
                      />
                    ),
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title:'profile',
                    headerShown : false,
                    tabBarIcon : ({color,focused})=>(
                      <TabIcon 
                        icon={profile}
                        color={color}
                        focused={focused}
                        name='profile'
                      />
                    ),
                }}
            />
        </Tabs>
    </>
  )
}

export default TabLayout