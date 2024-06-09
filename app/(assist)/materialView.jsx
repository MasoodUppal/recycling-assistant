import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link, router, useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const materialView = () => {
  const params = useLocalSearchParams();
  item = params;
  return (
    // <SafeAreaView>
      <ScrollView contentContainerStyle={{}}>
        <View style={styles.dropDownArea}>
          <Text style={styles.dropdowntext1}>{item.material_name}</Text>
          <Image style={styles.image} source={{ uri: item.image_url }} />
          <Text style={styles.dropdowntext1}>Catagorie: {item.category}</Text>
          <Text style={styles.dropdowntext2}>{item.article_content}</Text>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
};

export default materialView;

const styles = StyleSheet.create({
  dropDownArea: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: "90%",
    height: 200,
    alignSelf: "center",
  },
  dropdowntext1: {
    color: "black",
    fontSize: 20,
  },
  dropdowntext2: {
    textAlign: "justify",
    width: "90%",
    fontSize:15,
  },
});
