import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomAvatar from '../../mycomponents/CustomAvatar'
import { SafeAreaView } from 'react-native-safe-area-context'

const downArrow = require('../../assets/icons/arrow-down.png')
const upArrow = require('../../assets/icons/arrow-up.png')

const Learn = () => {
  const data = [
    {
      material_name: 'plastic',
      category: 'recyclable',
      image_url: 'https://plus.unsplash.com/premium_photo-1682144723453-66ccd1555232?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      article_content: 'Plastics are valued for their durability, lightweight nature, and resistance to corrosion and chemicals. They are used in a myriad of applications, from packaging and consumer goods to automotive parts and medical devices.However, the widespread use of plastic has led to environmental concerns due to its non-biodegradable nature. Improper disposal of plastic waste has resulted in pollution of oceans and terrestrial environments, posing a threat to wildlife and ecosystems.Efforts to address these issues include recycling programs, development of biodegradable plastics, and advocacy for reducing single-use plastics. Despite these challenges, plastic continues to be an essential material in many industries, driving innovation and technological advancement'
    },
    {
      material_name: 'paper',
      category: 'recyclable',
      image_url: 'https://images.unsplash.com/photo-1639037593613-fe623e381f15?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      article_content: 'Paper is a thin material produced by pressing together moist fibers, typically cellulose pulp derived from wood, rags, or grasses, and drying them into flexible sheets. It is recyclable and commonly used in packaging and writing.'
    },
    {
      material_name: 'glass',
      category: 'recyclable',
      image_url: 'https://images.unsplash.com/photo-1620676524838-7017c424120e?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      article_content: 'Glass is a non-crystalline, often transparent amorphous solid, that is typically brittle and can be recycled endlessly without loss in quality or purity.'
    },
    {
      material_name: 'metal',
      category: 'recyclable',
      image_url: 'https://images.unsplash.com/photo-1625662276901-4a7ec44fbeed?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      article_content: 'Metals are materials that are typically hard, shiny, malleable, fusible, and ductile, with good electrical and thermal conductivity. They are recyclable and commonly used in various products.'
    },
    {
      material_name: 'cardboard',
      category: 'recyclable',
      image_url: 'https://plus.unsplash.com/premium_photo-1681487516403-773ca29231e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVjeWNsYWJsZSUyMGNhcmRib2FyZHxlbnwwfHwwfHx8MA%3D%3D',
      article_content: 'Cardboard is a generic term for heavy-duty paper-based products having greater thickness and superior durability or other specific mechanical attributes to paper; such as foldability, rigidity and impact resistance. It is recyclable and commonly used in packaging.'
    },
    {
      material_name: 'aluminum',
      category: 'recyclable',
      image_url: 'https://images.unsplash.com/photo-1612749494710-c8ba3d7d23f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlY3ljbGFibGUlMjBhbHVtaW51bXxlbnwwfHwwfHx8MA%3D%3D',
      article_content: 'Aluminum is a chemical element with the symbol Al and atomic number 13. It is a silvery-white, soft, non-magnetic and ductile metal in the boron group. By mass, aluminum is the third-most abundant element in the Earth\'s crust. It is recyclable and commonly used in packaging, construction, and transportation.'
    }
  ];

  const [expandedItems, setExpandedItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (item) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [item.material_name]: !prevState[item.material_name]
    }));
  };
  const filteredData = data.filter(item =>
    item.material_name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (

    <SafeAreaView>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
        <CustomAvatar />
        <Text style={styles.text1}>Learn</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search material name..."
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
        <FlatList
          data={filteredData}
          style={styles.flatliststyle}
          renderItem={({ item }) => {
            const isItemExpanded = expandedItems[item.material_name];
            return (
              <>
                <TouchableOpacity onPress={() => handleClick(item)} >
                  <View style={styles.touch}>
                    <Text style={styles.text1}>{item.material_name}</Text>
                    <Image
                      source={isItemExpanded ? upArrow : downArrow}
                      style={styles.icon}
                    />
                  </View>
                </TouchableOpacity>
                {isItemExpanded && (

                  <View style={styles.dropDownArea}>
                    <ScrollView contentContainerStyle={{ maxHeight: 1000 }}>
                      <Image
                        style={styles.image}
                        source={{ uri: item.image_url }}
                      />
                      <Text style={styles.text1}>Catagorie:  {item.category}</Text>
                      <Text>{item.article_content}</Text>
                    </ScrollView>
                  </View>
                )}
              </>
            )
          }}
        // keyExtractor={item => item.material_name}
        />
      </View>
    </SafeAreaView>
  );
};

export default Learn

const styles = StyleSheet.create({
  flatliststyle: {
    width: '90%',
    marginBottom:169,
  },
  dropDownArea: {
    width: 300,
    // height: 300,
    padding: 20,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: 'snow',
    alignSelf: 'center',
    marginVertical: 10,
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
    backgroundColor: 'pink',
    width: '85%',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    justifyContent: 'center',
    marginVertical: 5,
  },
  icon: {
    width: 20,
    height: 20,
    margin: 20,
  },
  touch: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginVertical: 5,
    alignSelf: 'center',
  },
  text1: {
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: 150,
    alignSelf:'center',
  }

})