import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/color";
import IMAGES from "../constants/images";
import { AntDesign } from "@expo/vector-icons";
import AppListText from "../components/shared/AppListText";
export default function Notification() {
  const notificationData = [
    {
      iconUrl: IMAGES.dataIcon,
      name: "Data Topup",
      status: "success",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024-03-11",
    },
    {
      iconUrl: IMAGES.tvIcon,
      name: "Tv(DSTV)",
      status: "pending",
      body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-03-10",
    },
    {
      iconUrl: IMAGES.phoneIcon,
      name: "Airtime",
      status: "success",
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2024-03-09",
    },
    {
      iconUrl: IMAGES.giftIcon,
      name: "Gift card",
      status: "success",
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "2024-03-08",
    },
  ];
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "success":
        return "text-[#3170ED]";
      case "pending":
        return "text-[#DBB42E]";
      default:
        return "bg-[#eeeeee]"; // Default color
    }
  };
  return (
    <>
      {notificationData && notificationData.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.billPaymentStyle}
          data={notificationData}
          renderItem={({ item }) => (
            <View
              style={{
                borderColor: COLORS.borderColor,
                borderWidth: 0.5,
                paddingVertical: 10,
                borderRadius: 16,
                paddingHorizontal: 10,
              }}
            >
              <View className="w-full">
                <View className="flex-row flex items-center justify-between">
                  <View className="flex-row items-center p-0">
                    <Image className="w-8 h-8 mr-1" source={item.iconUrl} />
                    <Text className="text-sm">{item.name}</Text>
                  </View>
                  <Text
                    className={`text-sm ${getStatusColor(item.status)} mr-2`}
                  >
                    {item.status}
                  </Text>
                </View>
                <Text
                  className="text-xs mt-2 mb-1"
                  style={{ color: COLORS.grayShadow }}
                >
                  {item.body}
                </Text>
                <Text className="w-full h-[1px] bg-gray-100" />
                <View className="flex-row items-center justify-between p-1">
                  <Text style={{ color: COLORS.grayShadow }}>{item.date}</Text>
                  <Pressable className="text-sm flex-row items-center ">
                    <Text className="mr-1" style={{ color: COLORS.grayShadow }}>
                      Details
                    </Text>
                    <AntDesign name="right" size={14} color="gray" />
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View className="flex-1 items-center justify-center bg-white">
          <Image
            style={styles.imageStyle}
            source={IMAGES.emptynotificationIcon}
            resizeMode="contain"
          />
          <AppListText
            text={
              "No history yet, transaction history will appear here if you have one."
            }
            fontFamily={"Nunito-Medium"}
            textAlign="center"
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  billPaymentStyle: {
    flex: 1,
    padding: 20,
    gap: 20,
    width: "100%",
    backgroundColor: COLORS.white,
  },
  imageStyle: {
    width: 145,
    resizeMode: "contain",
    height: 145,
    marginBottom: 20,
  },
});
