import { Pressable, Text, View } from "react-native";
import { COLORS } from "../../constants/color";

const DataBox = ({ item }) => {
  return (
    <View
      className="w-[100px] h-14"
      style={{ backgroundColor: COLORS.Secondary }}
    >
      <View className="w-[200px] bg-orange-400">
        <Text>{item.gb}</Text>
      </View>
    </View>
  );
};

export default DataBox;
