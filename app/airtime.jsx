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
const Airtime = () => {
  const [selected, setSelected] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const showSuccess = () => {
    setModal(!modal);
    setModalOpen(!modalOpen);
  };
  const data = [
    { key: "1", value: "0810345434" },
    { key: "2", value: "0703212344" },
  ];
  const [number, setNumber] = useState("");

  // Function to handle text input changes
  const handleInputChange = (inputValue) => {
    // Replace non-numeric characters with an empty string
    const formattedValue = inputValue.replace(/[^0-9]/g, "");
    // Update state with the formatted value
    setNumber(formattedValue);
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
              <AntDesign name="down" size={20} color="gray" />
            </Pressable>
            <View className="w-3/4 flex-row items-center justify-between">
              <Text className="text-lg font-medium text-gray-500">
                09033173928
              </Text>
              <AntDesign name="down" size={20} color="gray" />
            </View>
          </View>
          <Text className="text-right" style={{ color: COLORS.Primary }}>
            Select number from contact
          </Text>
          <Text className="mt-5 font-normal text-lg">Airtime Top up</Text>
          <View className="flex-row gap-6 flex-wrap mt-1">
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
                  Card value
                </Text>
                <Text className="text-[16px] font-semibold">89,000</Text>
              </View>
              <View className="w-full flex flex-row items-center justify-between mb-5">
                <Text
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: "Nunito-Regular",
                    color: COLORS.grayShadow,
                  }}
                >
                  Platform charge:
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
                  Total charge
                </Text>
                <Text className="text-[16px] font-semibold">90,000</Text>
              </View>
            </View>
            <AppButton
              title={"Submit"}
              marginTop={100}
              // onPress={handleSubmit(onSignInPressed)}
              onPress={() => {
                router.push("payment");
                setModalOpen(!modalOpen)
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
