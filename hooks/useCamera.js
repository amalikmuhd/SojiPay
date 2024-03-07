import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState } from "react";

export default function useCamera() {
  const [imageUri, setImageUri] = useState([]);
  const [newImg, setNewImg] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions(); // Move this line outside of handleTakePhoto

  useEffect(() => {
    imageUri?.map((uri) => setNewImg(uri.uri));
  }, [imageUri]);

  const onChangeImage = (assets) => {
    setImageUri(assets);
  };

  const handleRemove = () => {
    setNewImg("");
  };

  const handleTakePhoto = async () => {
    try {
      if (!permission || !permission.granted) {
        Alert.alert("Permission Denied", "Permission to access camera is required.");
        return;
      }

      const { uri } = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsEditing: true,
      });
      console.log("This is the photo...", uri)
      if (uri) onChangeImage([{ uri }]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleTakePhoto,
    handleRemove,
    newImg,
  };
}
