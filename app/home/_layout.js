import { Tabs, router } from 'expo-router';
import { Text, View } from 'react-native';
import Icon, { Icons } from '../../components/Icons';
import TabButton from '../../components/shared/TabButton';
import { COLORS } from '../../constants/color';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabArr = [
  {
    route: 'index',
    label: 'Home',
    title:'Home',
    type: Icons.Feather,
    icon: 'home',
    // component: ColorScreen,
    color: COLORS.Primary,
    alphaClr: COLORS.Secondary,
  },
  {
    route: 'Giftcard',
    label: 'Giftcard',
    title:'Sell gift card',
    type: Icons.MaterialIcons,
    icon: 'card-giftcard',
    color: COLORS.Primary,
    alphaClr: COLORS.Secondary,
  },
  {
    route: 'BillPayment',
    label: 'Bill Payment',
    title:'Bill Payment',
    type: Icons.Feather,
    icon: 'list',
    color: COLORS.Primary,
    alphaClr: COLORS.Secondary,
  },
  {
    route: 'Profile',
    label: 'Profile',
    title:'Profile',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    color: COLORS.Primary,
    alphaClr: COLORS.Secondary,
  },
];

export default () => {
  return (
    <Tabs>
      {TabArr.map((item, index) => {
        return (
          <Tabs.Screen
            key={index}
            name={item.route}
            options={{
              headerShown:
                item.route === 'index' || item.route === 'Profile'
                  ? false
                  : true,
              tabBarShowLabel:false,
              headerTitle:`${item?.title}`,
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()} className="p-4">
                  <Ionicons name="ios-arrow-back" size={24} color="black" />
                </TouchableOpacity>
              ),
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tabs>
  );
};
