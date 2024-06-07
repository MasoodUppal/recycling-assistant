import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';

const notification = () => {
    // const navigation = useNavigation();
    // React.useLayoutEffect(() => {
    //   navigation.setOptions({ headerShown: false });
    // }, [navigation]);
  return (
    <View>
      <Text>notification</Text>
    </View>
  )
}

export default notification

const styles = StyleSheet.create({})