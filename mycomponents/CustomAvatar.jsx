import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { router, useNavigation } from 'expo-router'

const CustomAvatar = ({addStyles}) => {
    const data = {
        email: "tess2@1gmail.com",
        name: "Name"
    }
    const [showNotifiction, setshowNotifiction] = useState(false)
    const navigation=useNavigation()

    return (
        <>

            <View style={[{ width: 300, height: 50, width: '85%', flexDirection: 'row', gap: 10, justifyContent: 'space-between', alignItems: 'center' ,marginVertical:10},addStyles]}>

                <Image
                    source={require('../assets/avatar/man.png')}
                    style={{ width: 50, height: 50 }}
                />
                <Text style={styles.textstyle}>{data.name}</Text>
                <TouchableOpacity onPress={() => {router.push('/notification')}}>
                    <Image
                        source={require('../assets/icons/bell.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CustomAvatar

const styles = StyleSheet.create({
    textstyle:{
        fontSize:20,
        flexGrow:2,
    }
})