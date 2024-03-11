import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  FlatList,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import IMAGES from "../constants/images";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants/color";
import AppButton from "../components/shared/AppButton";
import DataBox from "../components/shared/DataBox";
import { router } from "expo-router";
const Data = () => {
  const [selected, setSelected] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [showDrop, setshowDrop] = React.useState(false);
  const [isShown, setIsShown] = useState(false);
  const toggleTheBox = () => {
    setIsShown((previousState) => !previousState);
  };
  const showSuccess = () => {
    setModal(!modal);
    setModalOpen(!modalOpen);
  };
  const dataData = [
    { id: 1, gb: "10GB", days: "2 days", amount: 500 },
    { id: 2, gb: "10GB", days: "2 days", amount: 500 },
    { id: 3, gb: "10GB", days: "2 days", amount: 500 },
    { id: 4, gb: "10GB", days: "2 days", amount: 500 },
    { id: 5, gb: "10GB", days: "2 days", amount: 500 },
    { id: 6, gb: "10GB", days: "2 days", amount: 500 },
    { id: 7, gb: "10GB", days: "2 days", amount: 500 },
    { id: 8, gb: "10GB", days: "2 days", amount: 500 },
    { id: 9, gb: "10GB", days: "2 days", amount: 500 },
  ];
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
          <Text className="mt-5 font-normal text-lg">Select data plan</Text>
          <View className="w-4/4 relative flex-row items-center justify-between border-gray-300 border p-3 rounded-lg">
            <Text className="text-sm font-medium text-gray-500">
              Select plan
            </Text>
            <Pressable onPress={() => setshowDrop(!showDrop)}>
              <AntDesign name="down" size={14} color="gray" />
            </Pressable>
          </View>
          {showDrop && (
            <View className="absolute z-20 p-4 top-[228px] right-4 bg-white border border-gray-100 shadow-xl w-full rounded-lg">
              <Text className="mb-4 font-semibold">Hot Deal</Text>
              <Text className="mb-4 font-semibold">Daily</Text>
              <Text className="mb-4 font-semibold">Weekly</Text>
              <Text className="mb-4 font-semibold">Yearly</Text>
            </View>
          )}
          <Text className="mt-5 text-lg">Hot Deals</Text>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {dataData.map((item) => (
              <View key={item?.id} style={styles.itemContainer}>
                <Pressable
                  className="w-full h-12 flex-row"
                  onPress={() => setModalOpen(!modalOpen)}
                >
                  <View className="mr-1">
                    <Text className="font-semibold mb-2">{item.gb}</Text>
                    <Text style={{ color: COLORS.grayShadow }}>
                      ₦{item.amount}
                    </Text>
                  </View>
                  <Text
                    style={{ backgroundColor: COLORS.Primaryshade }}
                    className="h-6 rounded-lg text-xs p-1"
                  >
                    {item.days}
                  </Text>
                </Pressable>
              </View>
            ))}
          </ScrollView>
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
                    source={IMAGES.mtnIcon}
                    style={styles.notification}
                    className="mr-2"
                  />
                  <Text className="text-[16px] font-medium">Data</Text>
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
                  Data plan
                </Text>
                <Text className="text-[16px] font-semibold">2 days/2.5GB</Text>
              </View>
              <View className="w-full flex flex-row items-center justify-between mb-2">
                <Text
                  className="text-[16px] font-semibold"
                  style={{
                    fontFamily: "Nunito-Regular",
                    color: COLORS.grayShadow,
                  }}
                >
                  Recipient number
                </Text>
                <Text className="text-[16px] font-semibold">07033173982</Text>
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
              title={"Buy Data"}
              marginTop={100}
              // onPress={handleSubmit(onSignInPressed)}
              onPress={() => {
                router.push("datapayment");
                setModalOpen(!modalOpen);
              }}
            />
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default Data;
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
