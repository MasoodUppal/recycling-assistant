import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";

const rightArrow = require("../assets/icons/right-arrow.png");
const closeButton = require("../assets/icons/close-button.png");

const CustomAvatardropdown = ({
  optionObjectArr,
  title,
  selectPlaceholder,
  onselect,
}) => {
  const options = optionObjectArr;
  const textPromp = title;
  const selectPh = selectPlaceholder;

  const [selectedOPtion, setselectedOPtion] = useState(selectPh);
  const [isClicked, setisClicked] = useState(false);
  const [data, setdata] = useState(options);

  const searchRef = useRef();

  const onSearch = (txt) => {
    if (txt !== "") {
      let tempdata = data.filter((item) => {
        return item.option.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setdata(tempdata);
    } else {
      setdata(options);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{textPromp}</Text>
      <TouchableOpacity
        style={styles.avatarButton}
        onPress={() => setisClicked(!isClicked)}
      >
        <Text>{selectedOPtion}</Text>
        <Image source={isClicked ? closeButton : rightArrow} style={styles.icon} />
      </TouchableOpacity>
      {isClicked && (
        <View style={styles.overlay}>
          <View style={styles.dropDownArea}>
            <View style={styles.avatarOverlay}>
              <Text style={styles.headingOverlay}>{textPromp}</Text>
              <TouchableOpacity
                onPress={() => setisClicked(!isClicked)}
                style={styles.iconOverlay}
              >
                <Image
                  source={closeButton}
                  style={{width:30,height:30,tintColor:'red'}}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="search"
              ref={searchRef}
              style={styles.searchInput}
              onChangeText={(txt) => {
                onSearch(txt);
              }}
            />
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.optionItem}
                    onPress={() => {
                      setselectedOPtion(item.option);
                      setisClicked(false);
                      onSearch("");
                      searchRef.current.clear();
                      onselect(item.option);
                    }}
                  >
                    <Image
                      source={item.imageSrc}
                      style={{ width: 40, height: 40 }}
                    />
                    <Text>{item.option}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default CustomAvatardropdown;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 20,
    alignSelf:'flex-start',
  },
  avatarButton: {
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  avatarOverlay: {
    width: 300,
    height: 50,
    alignSelf: "center",
    marginTop: 2,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconOverlay: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  headingOverlay: {
    fontSize: 20,
    fontWeight: "800",
  },
  overlay: {
    position: "absolute",
    top: -80,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: "rgb(191, 255, 223)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  dropDownArea: {
    width: 300,
    height: 400,
    borderRadius: 10,
    borderColor: "gray",
    backgroundColor: "snow",
    marginTop: 10,
    elevation: 10,
  },
  searchInput: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginTop: 20,
    paddingLeft: 15,
    alignSelf: "center",
  },
  optionItem: {
    width: "85%",
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    alignSelf: "center",
    justifyContent: "flex-start",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
