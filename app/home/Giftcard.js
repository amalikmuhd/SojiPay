import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import AppInput from "../../components/shared/AppInput";
import AppButton from "../../components/shared/AppButton";
import { EvilIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import { COLORS } from "../../constants/color";
import useImagePicker from "../../hooks/useImagePicker";
import { BottomModal, ModalContent, SlideAnimation } from "react-native-modals";
import AppModal from "../../components/shared/AppModal";
import { router } from "expo-router";
import useCamera from "../../hooks/useCamera";
import { AntDesign } from "@expo/vector-icons";

export default function Gift() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [activeM, setActiveM] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const [showDrop, setshowDrop] = React.useState(false);
  const { control, handleSubmit, watch } = useForm();

  const { handlePress, newImg } = useImagePicker();
  const { handleTakePhoto, handleCapture, capturedImg } = useCamera();
  console.log("This is the camera photo i uploaded", capturedImg);
  const onSignInPressed = (data) => {
    const { cardname, cardnumber } = data;
    router.push({ pathname: "verify-email", params: { cardname, cardnumber } });
  };
  const showSuccess = () => {
    setModal(!modal);
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
        <StatusBar style="dark" />
        <View style={styles.root}>
          <View />
          <View />
          <View>
            <Text className="mt-5 font-normal text-lg">Card Name</Text>
            <View className="w-4/4 relative flex-row items-center justify-between border-gray-300 border p-3 rounded-lg">
              <Text className="text-sm font-medium text-gray-500">
                Google Play
              </Text>
              <Pressable onPress={() => setshowDrop(!showDrop)}>
                <AntDesign name="down" size={14} color="gray" />
              </Pressable>
            </View>
            <AppInput
              name="cardnumber"
              label={"Card number"}
              control={control}
              rules={{ required: "Card number is required" }}
              marginTop={8}
              keyboard="number-pad"
              placeholder={"123909893847"}
            />
            <AppInput
              name="pin"
              label={"Pin/Security code"}
              control={control}
              placeholder={"******"}
              rules={{
                required: "Pin is required",
                minLength: {
                  value: 6,
                  message: "Pin should be minimum 6 characters long",
                },
              }}
              marginTop={8}
              trailingIcon
              secureTextEntry={false}
            />
            <AppInput
              name="cardvalue"
              label={"Card Value"}
              control={control}
              rules={{ required: "Card Value is required" }}
              marginTop={8}
              placeholder={"₦85,000"}
            />
            {newImg || capturedImg ? (
              <Pressable onPress={handlePress || handleCapture}>
                <Image
                  source={{ uri: newImg || capturedImg }}
                  style={{
                    width: "100%",
                    height: 140,
                    borderRadius: 8,
                    objectFit: "cover",
                  }}
                  className="mt-5 mb-2 object-cover"
                />
              </Pressable>
            ) : (
              <Pressable
                style={{
                  width: "100%",
                  borderWidth: 1,
                  borderStyle: "dashed",
                  borderColor: "#CCCCCC", // or any other color you prefer
                  marginTop: 4,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Pressable
                  className="w-full h-36  flex flex-col items-center justify-center"
                  onPress={() => {
                    setActiveM("upload");
                    setModalOpen(!modalOpen);
                  }}
                >
                  <View className="mb-5 w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                    <EvilIcons name="camera" size={36} color="black" />
                  </View>

                  <Text
                    className="text-2xl w-full text-center"
                    style={{
                      fontFamily: "Nunito-Regular",
                      color: COLORS.grayShadow,
                    }}
                  >
                    Capture card here
                  </Text>
                </Pressable>
              </Pressable>
            )}
            <Text
              style={{ fontFamily: "Nunito-Regular", color: COLORS.grayShadow }}
            >
              Please capture card if you have it
            </Text>
          </View>
          <View style={{ marginTop: 16 }}>
            {newImg || capturedImg ? (
              <AppButton
                title={"Continue"}
                onPress={() => {
                  setActiveM("summary");
                  setModalOpen(!modalOpen);
                }}
                // onPress={handleSubmit(onSignInPressed)}
              />
            ) : (
              <AppButton
                title={"Continue"}
                background={COLORS.Secondary}
                titleColor={COLORS.Primary}
                // onPress={handleSubmit(onSignInPressed)}
              />
            )}
          </View>
          <View />
        </View>
        {modal && (
          <AppModal
            title="Success"
            description={`Your gift card and bank details has be submitted successfully, You will hear from us immediately we finish verifying your card.`}
            buttonTitle="Continue"
            modalVisible={modal}
            setModalVisible={setModal}
            callback={() => router.push("/home")}
          />
        )}
      </ScrollView>
      {/* Modal for upload */}
      {activeM == "upload" && (
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
          <ModalContent style={{ width: "100%", height: 200 }}>
            <View className="w-full">
              <View className="w-full p-2 rounded-lg">
                <Pressable
                  className="w-full flex flex-row items-center mb-5"
                  onPress={handleTakePhoto}
                >
                  <EvilIcons name="camera" size={36} color="black" />
                  <Text className="text-[16px] font-semibold mr-5">
                    Take a photo
                  </Text>
                </Pressable>
                <Pressable
                  className="w-full flex flex-row items-center mb-2"
                  onPress={handlePress}
                >
                  <EvilIcons name="camera" size={36} color="black" />
                  <Text className="text-[16px] font-semibold mr-5">
                    Upload photo from gallery
                  </Text>
                </Pressable>
              </View>
            </View>
          </ModalContent>
        </BottomModal>
      )}
      {/* Modal for Summary */}
      {activeM == "summary" && (
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
          onSwipeOut={() => setModalOpen(!modalOpen)}
          onTouchOutside={() => setModalOpen(!modalOpen)}
        >
          <ModalContent style={{ width: "100%", height: 300 }}>
            <View className="w-full">
              <View
                className="w-full p-2 rounded-lg"
                style={{ backgroundColor: COLORS.Secondary }}
              >
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
                onPress={showSuccess}
              />
            </View>
          </ModalContent>
        </BottomModal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
