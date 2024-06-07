import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

const downArrow = require('../assets/icons/arrow-down.png')
const upArrow = require('../assets/icons/arrow-up.png')



const Customdropdown = ({optionObjectArr,title,selectPlaceholder,onselect}) => {

    // const options = [{ option: 'apple' }, { option: 'mangeo' }, { option: 'bananaa' }]
    // const textPromp='select'
    const options = optionObjectArr
    const textPromp= title
    const selectPh=selectPlaceholder

    const [selectedOPtion, setselectedOPtion] = useState(selectPh)
    const [isClicked, setisClicked] = useState(false)
    const [data, setdata] = useState(options)

    const searchRef = useRef()
    
    const onSearch = (txt) => {
        if (txt !== '') {
            let tempdata = data.filter((item => {
                return item.option.toLowerCase().indexOf(txt.toLowerCase()) > -1
            }))
            setdata(tempdata);
        } else {
            setdata(options);
        }
    }

    return (
        <View style={styles.constainer1}>
            <Text style={styles.heading1}>{textPromp}</Text>
            <TouchableOpacity style={styles.dorpDownSelector} onPress={() => { setisClicked(!isClicked); setdata(options) }}>
                <Text>{selectedOPtion}</Text>
                <Image
                    source={isClicked ? upArrow : downArrow}
                    style={styles.icon}
                />
            </TouchableOpacity>
            {isClicked ?
                <View style={styles.dropDownArea}>
                    <TextInput placeholder="search"
                        ref={searchRef}
                        style={styles.searchInput}
                        onChangeText={(txt) => {
                            onSearch(txt);
                        }} />
                    <FlatList data={data} renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.optionItem} onPress={() => {
                                setselectedOPtion(item.option)
                                setisClicked(!isClicked)
                                onSearch('')
                                searchRef.current.clear()
                                onselect(item.option)
                            }}>
                                <Text>{item.option}</Text>
                            </TouchableOpacity>
                        )
                    }} />
                </View>
                : null}
        </View>
    )
}

export default Customdropdown

const styles = StyleSheet.create({
    container1: {
        flexGrow: 1,
        alignItems: 'center',
    },
    heading1: {
        fontSize: 20,
        fontWeight: '800',
        marginTop: 20,
    },
    dorpDownSelector: {
        width: 300,
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    icon: {
        width: 20,
        height: 20,
    },
    dropDownArea: {
        width: 300,
        height: 300,
        borderRadius: 10,
        borderColor: 'gray',
        backgroundColor: 'snow',
        alignSelf: 'center',
        marginTop: 10,
        elevation: 10,
    },
    searchInput: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        marginTop: 20,
        paddingLeft: 15,
        alignSelf: 'center',
    },
    optionItem: {
        width: '85%',
        height: 50,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    }
})