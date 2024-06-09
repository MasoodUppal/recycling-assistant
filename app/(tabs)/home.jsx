import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Custombutton from "../../mycomponents/Custombutton";
import { useRouter, router } from "expo-router";
import CustomAvatar from "../../mycomponents/CustomAvatar";
import { StatusBar } from "expo-status-bar";
import CustomMaterial from "../../mycomponents/CustomMaterial";

const Home = () => {
  const data = { points_available: "200", waste_recycled_in_kg: "20" };

  return (
    <SafeAreaView style={styles.safeareaviewstyle}>
      <ScrollView contentContainerStyle={{ height: "110%" }}>
        <View style={styles.parentcontainer}>
          <CustomAvatar />

          <View style={styles.coinContainer}>
            <View style={styles.coincontainerdata}>
              <Image
                source={require("../../assets/icons/coin.png")}
                style={styles.image}
              />
              <Text style={styles.coinDataText}>{data.points_available}</Text>
              <Text style={styles.coinText}>Coins</Text>
            </View>
            <View style={styles.bar}></View>
            <View style={styles.coincontainerdata}>
              <Image
                source={require("../../assets/icons/bag.png")}
                style={styles.image}
              />
              <Text style={styles.coinDataText}>
                {data.waste_recycled_in_kg}
              </Text>
              <Text style={styles.coinText}>kg Recycled</Text>
            </View>
          </View>

          <View style={{}}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 0 }}>
              Materials
            </Text>
            <View style={{height:120,width:'90%'}}>
              <CustomMaterial data="data from custom material" />
            </View>
            {/* <View style={styles.materialcontainer}>
              <Text style={styles.materialcontainertext}>
                material information
              </Text>
              <Text style={styles.materialcontainertext}>
                material information
              </Text>
              <Text style={styles.materialcontainertext}>
                material information
              </Text>
              <Text style={styles.materialcontainertext}>
                material information
              </Text>
            </View> */}
          </View>

          <View style={{ flexDirection: "row", width: 300 }}>
            <Custombutton
              containerStyles={styles.disposalButton}
              textStyles={{ fontSize: 14 }}
              title={"Request Disposal"}
            />
            <Custombutton
              containerStyles={styles.shopButton}
              textStyles={{ fontSize: 14 }}
              title={"Shop"}
            />
          </View>

          <View style={styles.trackcontainer}>
            <Text>Next vehicle will arive at</Text>
            <Text>Day</Text>
            <Text>Date </Text>
          </View>

          <View style={{}}>
            <Custombutton
              containerStyles={styles.trackButton}
              textStyles={{ fontSize: 14 }}
              title={"Track it"}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeareaviewstyle: {
    backgroundColor: "white",
    flex: 1,
  },
  parentcontainer: {
    backgroundColor: "white",
    flex: 1,
    gap: 12,
    alignItems: "center",
  },
  coinContainer: {
    backgroundColor: "teal",
    width: '90%',
    height: 120,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 10,
    marginVertical: 10,
  },
  coinText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  bar: {
    backgroundColor: "white",
    width: 5,
    height: 70,
  },
  recycleText: {
    backgroundColor: "teal",
    width: 50,
    height: 50,
    textAlign: "center",
  },
  materialcontainer: {
    width: 300,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  materialcontainertext: {
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    width: 65,
    height: 65,
    textAlign: "center",
  },
  disposalButton: {
    backgroundColor: "#31363F",
    width: 130,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    justifyContent: "center",
    padding: 5,
  },
  shopButton: {
    backgroundColor: "#31363F",
    width: 130,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    justifyContent: "center",
    padding: 5,
  },
  trackButton: {
    backgroundColor: "#31363F",
    width: 130,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    justifyContent: "center",
    padding: 5,
  },
  trackcontainer: {
    backgroundColor: "#EEEEEE",
    width: 300,
    height: 150,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
  },
  image: {
    width: 35,
    height: 35,
  },
  coincontainerdata: {
    alignSelf: "flex-start",
    justifyContent: "center",
    gap: 5,
    width: 100,
    height: "100%",
    alignItems: "center",
  },
  coinDataText: {
    color: "white",
    fontSize: 20,
  },
});
