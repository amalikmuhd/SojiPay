import { View, Text, Pressable } from "react-native";
import React from "react";
import AppModal from "../components/shared/AppModal";
import { router } from "expo-router";

const TvPay = () => {
  const [modal, setModal] = React.useState(false);
  const showSuccess = () => {
    setModal(!modal);
  };
  return (
    <>
      <View className="flex-1 items-center justify-center bg-blue-100">
        <Text>payment comming soon!!</Text>
        <Pressable
          className="p-2 w-20 bg-blue-500 text-white"
          onPress={showSuccess}
        >
          <Text>Pay Now</Text>
        </Pressable>
      </View>
      {modal && (
        <AppModal
          title="Payment Success"
          description={`You have successfully Subscribed 3,450 DStv Padi package.`}
          buttonTitle="ok"
          modalVisible={modal}
          setModalVisible={setModal}
          callback={() => router.push("/home")}
        />
      )}
    </>
  );
};

export default TvPay;
