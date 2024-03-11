import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import IMAGES from "../constants/images";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants/color";
import AppButton from "../components/shared/AppButton";
import { router } from "expo-router";
import AppListText from "../components/shared/AppListText";
const Electricity = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [showDrop, setshowDrop] = React.useState(false);
  const [number, setNumber] = useState("");
  const [switchState, setSwitch] = useState("");
  const [isShown, setIsShown] = useState(false);
  const toggleTheBox = () => {
    setIsShown((previousState) => !previousState);
  };
  const electData = [
    { id: 1, amount: 1000 },
    { id: 2, amount: 2000 },
    { id: 3, amount: 3000 },
    { id: 4, amount: 4000 },
    { id: 5, amount: 5000 },
    { id: 6, amount: 6000 },
  ];
  // Function to handle text input changes
  const handleInputChange = (inputValue) => {
    const formattedValue = inputValue.replace(/[^0-9]/g, "");
    setNumber(formattedValue);
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
        <View className="px-4">
          {/* select boxes here */}
          <View className="mb-2 mt-3">
            <View>
              <View style={styles.innerThirdContainer} className="items-center">
                <TouchableOpacity onPress={() => setSwitch("prepaid")}>
                  <View
                    className="p-4 w-[150px] bg-gray-300 rounded-lg flex-row items-center justify-center"
                    style={{ backgroundColor: COLORS.Secondary }}
                  >
                    <Text
                      className={`mr-1`}
                      style={[
                        { fontFamily: "Nunito-Medium" },
                        switchState == "prepaid"
                          ? { color: COLORS.black }
                          : { color: COLORS.grayShadow },
                      ]}
                    >
                      Prepaid
                    </Text>
                    {switchState == "prepaid" ? (
                      <AntDesign
                        name="checkcircle"
                        size={14}
                        color="dodgerblue"
                      />
                    ) : (
                      <AntDesign
                        name="checkcircleo"
                        size={14}
                        color="dodgerblue"
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <Text className="mx-2">Or</Text>
                <TouchableOpacity onPress={() => setSwitch("postpaid")}>
                  <View
                    className="p-4 w-[150px] bg-gray-300 rounded-lg flex-row items-center justify-center"
                    style={{ backgroundColor: COLORS.Secondary }}
                  >
                    <Text
                      className="mr-1 "
                      style={[
                        { fontFamily: "Nunito-Medium" },
                        switchState === "postpaid"
                          ? { color: COLORS.black }
                          : { color: COLORS.grayShadow },
                      ]}
                    >
                      Postpaid
                    </Text>
                    {switchState === "postpaid" ? (
                      <AntDesign
                        name="checkcircle"
                        size={14}
                        color="dodgerblue"
                      />
                    ) : (
                      <AntDesign
                        name="checkcircleo"
                        size={14}
                        color="dodgerblue"
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text className="mt-5 font-normal text-lg">Service provider</Text>
          <View className="w-4/4 relative flex-row items-center justify-between border-gray-300 border p-3 rounded-lg">
            <Text className="text-sm font-medium text-gray-500">
              Select provider
            </Text>
            <Pressable onPress={() => setshowDrop(!showDrop)}>
              <AntDesign name="down" size={14} color="gray" />
            </Pressable>
          </View>
          {showDrop && (
            <View className="absolute z-20 p-4 top-[165px] right-4 bg-white border border-gray-100 shadow-xl w-full rounded-lg">
              <View className="flex flex-row items-center mb-3 ">
                <Image
                  source={IMAGES.ibdecIcon}
                  style={styles.notification}
                  className="mr-2"
                />
                <Text className="text-[16px] font-medium mb-3">
                  Ibadan Electricity
                </Text>
              </View>
              <View className="flex flex-row items-center">
                <Image
                  source={IMAGES.ikejaIcon}
                  style={styles.notification}
                  className="mr-2"
                />
                <Text className="text-[16px] font-medium">Ikeja Disco</Text>
              </View>
            </View>
          )}
          <Text className="mt-5 font-normal text-lg">Meter number</Text>
          <View className="border p-4 rounded-lg flex-row items-center border-gray-300">
            <TextInput
              style={styles.input}
              value={number}
              onChangeText={handleInputChange}
              placeholder="Eg: 1002329350"
              keyboardType="numeric"
            />
          </View>
          <Text className="mt-5 text-lg">Select Amount</Text>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {electData.map((item) => (
              <View key={item?.id} style={styles.itemContainer}>
                <Pressable
                  className="w-full h-10 flex-row items-center justify-center"
                  onPress={() => setModalOpen(!modalOpen)}
                >
                  <View className="mr-1">
                    <Text style={{ color: COLORS.grayShadow }}>
                      ₦{item.amount}
                    </Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </ScrollView>
          <Text className="mt-5 text-lg">Enter Amount</Text>
          <View className="border p-4 rounded-lg flex-row items-center border-gray-300">
            <TextInput
              style={styles.input}
              value={number}
              onChangeText={handleInputChange}
              placeholder="Eg: ₦ 50"
              keyboardType="numeric"
            />
          </View>
          <View className="mt-10">
            <AppButton
              title={"Buy unit"}
              onPress={() => setModalOpen(!modalOpen)}
            />
          </View>
        </View>
      </ScrollView>
      <BottomModal
        onBackdropPress={() => setModalOpen(!modalOpen)}
        swipeDirection={["up", "down"]} // can be string or an array
        swipeThreshold={200} // default 100
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalOpen(!modalOpen)}
        visible={modalOpen}
        // onSwipeOut={()=> setModalOpen(!modalOpen)}
        onTouchOutside={() => setModalOpen(!modalOpen)}
      >
        <ModalContent style={{ width: "100%", height: 450 }}>
          <View className="w-full">
            <View className="w-full p-2 rounded-lg">
              <Text className="font-medium text-lg text-gray-700 text-center mb-5">
                Confirm Checkout
              </Text>
              <View className="w-full flex flex-row items-center justify-between mb-2">
                <Text
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: "Nunito-Regular",
                    color: COLORS.grayShadow,
                  }}
                >
                  Description
                </Text>
                <View className="flex flex-row items-center">
                  <Image
                    source={IMAGES.ibdecIcon}
                    style={styles.notification}
                    className="mr-2"
                  />
                  <Text className="text-[16px] font-medium">
                    Ibadan Electricity
                  </Text>
                </View>
              </View>
              <View className="w-full flex flex-row items-center justify-between mb-5">
                <Text
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: "Nunito-Regular",
                    color: COLORS.grayShadow,
                  }}
                >
                  Amount
                </Text>
                <Text className="text-[16px] font-semibold">1,000</Text>
              </View>
              <View className="w-full flex flex-row items-center justify-between mb-2">
                <Text
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: "Nunito-Regular",
                    color: COLORS.grayShadow,
                  }}
                >
                  Meter Number
                </Text>
                <Text className="text-[16px] font-semibold">12345678</Text>
              </View>
              <View className="w-full flex flex-row items-center justify-between mb-2">
                <Text
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: "Nunito-Regular",
                    color: COLORS.grayShadow,
                  }}
                >
                  Meter Name
                </Text>
                <Text className="text-[16px] font-semibold">Mr. Alex Otti</Text>
              </View>
              <View className="w-full flex flex-row items-center justify-between mb-0">
                <Text
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: "Nunito-Regular",
                    color: COLORS.grayShadow,
                  }}
                >
                  Save as beneficiary
                </Text>
                <View>
                  <Switch
                    trackColor={{ false: "#767577", true: "#4caf50" }}
                    thumbColor={isShown ? "#8bc34a" : "#ddd"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleTheBox}
                    value={isShown}
                  />
                </View>
              </View>
            </View>
            <AppButton
              title={"Buy Unit"}
              marginTop={100}
              // onPress={handleSubmit(onSignInPressed)}
              onPress={() => {
                router.push("electpay");
                setModalOpen(!modalOpen);
              }}
            />
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default Electricity;
const styles = StyleSheet.create({
  activeButton: {
    backgroundColor: COLORS.Primary,
    width: "50%",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  notification: {
    width: 24,
    height: 24,
  },
  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "30%",
    padding: 10,
    marginBottom: 10,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: COLORS.Primarytint,
  },
  thirdContainer: {
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    paddingVertical: 30,
    shadowColor: "#000",
    gap: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.09,
    shadowRadius: 1.0,

    elevation: 0.8,
  },

  innerThirdContainer: {
    flexDirection: "row",
    // backgroundColor: COLORS.Secondary,
    borderRadius: 10,
    // paddingHorizontal: 14,
  },

  fouthCountainer: { flex: 0.7 },
});
