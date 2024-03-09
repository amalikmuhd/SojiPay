import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import IMAGES from "../constants/images";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants/color";
import AppButton from "../components/shared/AppButton";
import { router } from "expo-router";
const Tv = () => {
  const [selected, setSelected] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [showDrop, setshowDrop] = React.useState(false);
  const [showPackage, setshowPackager] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const showSuccess = () => {
    setModal(!modal);
    setModalOpen(!modalOpen);
  };
  const [number, setNumber] = useState("");
  const providerData = [
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
          <Text className="mt-5 font-normal text-lg">Service provider</Text>
          <View className="w-4/4 relative flex-row items-center justify-between border-gray-300 border p-3 rounded-lg">
            <Text className="text-sm font-medium text-gray-500">
              Select provider
            </Text>
            <Pressable onPress={() => setshowDrop(!showDrop)}>
              <AntDesign name="down" size={14} color="gray" />
            </Pressable>
          </View>
          <Text className="mt-5 font-normal text-lg">Smart card number</Text>
          <View className="border p-4 rounded-lg flex-row items-center border-gray-300">
            <TextInput
              style={styles.input}
              value={number}
              onChangeText={handleInputChange}
              placeholder="Eg: 1002329350"
              keyboardType="numeric"
            />
          </View>
          <View className="flex flex-row items-center">
            <AntDesign name="checkcircle" size={14} color="blue" />
            <Text className="ml-2" style={{ color: COLORS.grayShadow }}>
              Mr Alex John
            </Text>
          </View>
          <Text className="mt-5 font-normal text-lg">Package</Text>
          <View className="w-4/4 relative flex-row items-center justify-between border-gray-300 border p-3 rounded-lg">
            <Text className="text-sm font-medium text-gray-500">
              Select provider
            </Text>
            <Pressable onPress={() => setshowPackager(!showPackage)}>
              <AntDesign name="down" size={14} color="gray" />
            </Pressable>
          </View>
          {showDrop && (
            <View className="absolute z-20 p-4 top-[95px] right-4 bg-white border border-gray-100 shadow-xl w-full rounded-lg">
              <View className="flex flex-row items-center mb-3 ">
                <Image
                  source={IMAGES.dstvIcon}
                  style={styles.notification}
                  className="mr-2"
                />
                <Text className="text-[16px] font-medium mb-3">DSTV</Text>
              </View>
              <View className="flex flex-row items-center">
                <Image
                  source={IMAGES.startimeIcon}
                  style={styles.notification}
                  className="mr-2"
                />
                <Text className="text-[16px] font-medium">Startimes</Text>
              </View>
            </View>
          )}
          {showPackage && (
            <View className="absolute z-20 p-4 top-[320px] right-4 bg-white border border-gray-100 shadow-xl w-full rounded-lg">
              <View className="flex flex-row items-center justify-between mb-3 ">
                <Text className="text-[14px] font-normal mb-3">
                  Dstv Premium
                </Text>
                <View className="flex flex-row items-center">
                  <Text className="mr-4">3,000</Text>
                  <AntDesign name="checkcircleo" size={14} color="gray" />
                </View>
              </View>
              <View className="flex flex-row items-center justify-between mb-3 ">
                <Text className="text-[14px] font-normal mb-3">Dstv Paddi</Text>
                <View className="flex flex-row items-center">
                  <Text className="mr-4">2,000</Text>
                  <AntDesign name="checkcircle" size={14} color="blue" />
                </View>
              </View>
              <View className="flex flex-row items-center justify-between mb-3 ">
                <Text className="text-[14px] font-normal mb-3">
                  Dstv Premium
                </Text>
                <View className="flex flex-row items-center">
                  <Text className="mr-4">3,000</Text>
                  <AntDesign name="checkcircleo" size={14} color="gray" />
                </View>
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
              title={"Continue"}
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
                    source={IMAGES.dstvIcon}
                    style={styles.notification}
                    className="mr-2"
                  />
                  <Text className="text-[16px] font-medium">
                    TV/DSTV
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
                <Text className="text-[16px] font-semibold">3,450</Text>
              </View>
              <View className="w-full flex flex-row items-center justify-between mb-2">
                <Text
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: "Nunito-Regular",
                    color: COLORS.grayShadow,
                  }}
                >
                  Smart Card Number
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
                  Package
                </Text>
                <Text className="text-[16px] font-semibold">DStv Padi</Text>
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
                <Text className="text-[16px] font-semibold">Yes</Text>
              </View>
            </View>
            <AppButton
              title={"Pay Now"}
              marginTop={100}
              // onPress={handleSubmit(onSignInPressed)}
              onPress={() => {
                router.push("tvpay");
                setModalOpen(!modalOpen);
              }}
            />
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default Tv;
const styles = StyleSheet.create({
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
});
