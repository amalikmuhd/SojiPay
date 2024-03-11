import { Alert } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Camera} from "expo-camera";
export default function useImagePicker() {
  const [imageUri, setImageUri] = useState([]);
  const [newImg, setNewImg] = useState(null);

  useEffect(() => {
    imageUri?.map((uri) => setNewImg(uri.uri));
  }, [imageUri]);

  const onChangeImage = (assets) => {
    setImageUri(assets);
  };

  const handleRemove = () => {
    setNewImg("");
  };

  const handleImageSelect = async () => {
    try {
      const { assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsEditing: true,
      });
      if (!assets.canceled) onChangeImage(assets);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = () => {
    if (!newImg) handleImageSelect();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        { text: "Yes", onPress: handleRemove },
        { text: "No" },
      ]);
  };

  return {
    handlePress,
    handleImageSelect,
    handleRemove,
    newImg,
  };
}
