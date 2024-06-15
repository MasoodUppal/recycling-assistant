import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../mycomponents/FormField";
import Custombutton from "../../mycomponents/Custombutton";
import { Link, router } from "expo-router";
import CustomAvatar from "../../mycomponents/CustomAvatar";
import CustomAvatardropdown from "../../mycomponents/CustomAvatardropdown";

const imagesorce = require("../../assets/avatar/man.png");

const profilesetting = () => {
  const avatarData = [
    { imageSrc: imagesorce, option: "title1" },
    { imageSrc: imagesorce, option: "title2" },
    { imageSrc: imagesorce, option: "title3" },
    { imageSrc: imagesorce, option: "title4" },
    { imageSrc: imagesorce, option: "title5" },
    { imageSrc: imagesorce, option: "title6" },
  ];

  const [newName, setnewName] = useState(null);
  const [avatar, setavatar] = useState(null);

  const onsubmitName = () => {
    console.log(newName);
  };
  const onchangeAvatar = () => {
    console.log(avatar);
  };

  return (
    <SafeAreaView style={styles.safeareaviewstyle}>
      <View style={styles.container1}>
        <CustomAvatar />
        <Text style={styles.heading}>Profile Setting</Text>
        <FormField
          title="Change Name"
          placeholder="New name"
          otherStyles={{}}
          textStyles={styles.fieldtitle}
          handleChangeText={(e) => {
            setnewName(e);
          }}
        />
        <Custombutton
          title="Change Name"
          containerStyles={styles.butoon1}
          textStyles={styles.buttonText}
          handlePress={onsubmitName}
        />
        <CustomAvatardropdown
          optionObjectArr={avatarData}
          title="Select avatar"
          selectPlaceholder="change avatar"
          onselect={(value) => {
            setavatar(value);
          }}
        />
        <Custombutton
          title="Change avatar"
          containerStyles={styles.butoon1}
          textStyles={styles.buttonText}
          handlePress={onchangeAvatar}
        />
      </View>
    </SafeAreaView>
  );
};

export default profilesetting;

const styles = StyleSheet.create({
  container1: {
    height: "100%",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginLeft: 30,
    marginVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  butoon1: {
    alignSelf: "flex-end",
    marginRight: 30,
    width: 150,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  fieldtitle: {
    marginLeft: 0,
  },
});
