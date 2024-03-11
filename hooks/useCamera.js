import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";

export default function useCamera() {
  // const [imageUri, setImageUri] = useState([]);
  const [capturedImg, setCapturedImg] = useState(null);
  const onChangeImage = async (image) => {
    try {
      setCapturedImg(image);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  const handleRemove = () => {
    setCapturedImg("");
  };
  const handleTakePhoto = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      const result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        console.log(result);
        await onChangeImage(result?.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCapture = () => {
    if (!capturedImg) handleTakePhoto();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        { text: "Yes", onPress: handleRemove },
        { text: "No" },
      ]);
  };
  return {
    handleTakePhoto,
    handleRemove,
    capturedImg,
    handleCapture
  };
}
