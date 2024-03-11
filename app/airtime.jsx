import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import IMAGES from "../constants/images";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants/color";
import AppButton from "../components/shared/AppButton";
import { router } from "expo-router";

const Airtime = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [isShown, setIsShown] = useState(false);
  const [number, setNumber] = useState("");

  // Function to handle text input changes
  const handleInputChange = (inputValue) => {
    const formattedValue = inputValue.replace(/[^0-9]/g, "");
    setNumber(formattedValue);
  };
  const toggleTheBox = () => {
    setIsShown((previousState) => !previousState);
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
        <View className="px-4">
          <Text className="font-normal text-lg mb-2 mt-5">Phone number</Text>
          <View className="border p-4 rounded-lg flex-row items-center border-gray-300">
            <Pressable className="w-1/4 flex-row items-center">
              <Image
                source={IMAGES.mtnIcon}
                style={styles.notification}
                className="mr-2"
              />
              <AntDesign name="down" size={14} color="gray" />
            </Pressable>
            <View className="w-3/4 flex-row items-center justify-between">
              <Text className="text-sm font-medium text-gray-500">
                09033173928
              </Text>
              <AntDesign name="down" size={14} color="gray" />
            </View>
          </View>
          <Text className="text-right" style={{ color: COLORS.Primary }}>
            Select number from contact
          </Text>
          <Text className="mt-5 font-normal text-lg">Airtime Top up</Text>
          <View className="flex-row gap-6 flex-wrap mt-0">
            <Pressable
              className="w-[150px] h-14 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: COLORS.Secondary }}
            >
              <Text>₦ 500</Text>
            </Pressable>
            <Pressable
              className="w-[150px] h-14 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: COLORS.Secondary }}
            >
              <Text>₦ 200</Text>
            </Pressable>
            <Pressable
              className="w-[150px] h-14 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: COLORS.Secondary }}
            >
              <Text>₦ 1000</Text>
            </Pressable>
            <Pressable
              className="w-[150px] h-14 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: COLORS.Secondary }}
            >
              <Text>₦ 2000</Text>
            </Pressable>
          </View>
          <Text className="mt-5 font-normal text-lg mb-2">Amount</Text>
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
              title={"Buy airtime"}
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
        <ModalContent style={{ width: "100%", height: 400 }}>
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
                    source={IMAGES.mtnIcon}
                    style={styles.notification}
                    className="mr-2"
                  />
                  <Text className="text-[16px] font-medium">Airtime</Text>
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
                <Text className="text-[16px] font-semibold">₦ 1,000</Text>
              </View>
              <View className="w-full flex flex-row items-center justify-between mb-2">
                <Text
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: "Nunito-Regular",
                    color: COLORS.grayShadow,
                  }}
                >
                  Recipient Number:
                </Text>
                <Text className="text-[16px] font-semibold">08033176876</Text>
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
                {/* <Text className="text-[16px] font-semibold">Yes</Text> */}
              </View>
            </View>
            <AppButton
              title={"Buy Airtime"}
              marginTop={100}
              onPress={() => {
                router.push("payment");
                setModalOpen(!modalOpen);
              }}
            />
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default Airtime;
const styles = StyleSheet.create({
  notification: {
    width: 24,
    height: 24,
  },
});
