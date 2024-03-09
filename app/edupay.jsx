import { View, Text, Pressable } from "react-native";
import React from "react";
import AppModal from "../components/shared/AppModal";
import { router } from "expo-router";

const EduPay = () => {
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
          description={`You have successfully purchased Waec Result Checker Pin. Your pin will be sent to your email and phone number`}
          buttonTitle="ok"
          modalVisible={modal}
          setModalVisible={setModal}
          callback={() => router.push("/home")}
        />
      )}
    </>
  );
};

export default EduPay;
