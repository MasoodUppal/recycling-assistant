import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const _Assistlayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name='notification'
                    options={{
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name='profilesetting'
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='security'
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='leaderboard'
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='support'
                    options={{
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name='policy'
                    options={{
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name='materialView'
                    options={{
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name='mapView'
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
            <StatusBar style='dark' />
        </>
    )
}

export default _Assistlayout

const styles = StyleSheet.create({})