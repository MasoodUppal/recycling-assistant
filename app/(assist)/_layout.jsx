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
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name='security'
                    options={{
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name='leaderboard'
                    options={{
                        headerShown: true,
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
            </Stack>
            <StatusBar style='dark' />
        </>
    )
}

export default _Assistlayout

const styles = StyleSheet.create({})