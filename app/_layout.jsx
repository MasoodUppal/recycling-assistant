import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
        <Stack.Screen name="(assist)" options={{headerShown: false}} />
    </Stack>
  )
}

export default RootLayout

