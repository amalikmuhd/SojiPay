import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import Icon, { Icons } from '../../components/Icons';
import TabButton from '../../components/shared/TabButton';
import { COLORS } from '../../constants/color';

const TabArr = [
  {
    route: 'index',
    label: 'Home',
    type: Icons.Feather,
    icon: 'home',
    // component: ColorScreen,
    color: COLORS.Primary,
    alphaClr: COLORS.Secondary,
  },
  {
    route: 'Giftcard',
    label: 'Giftcard',
    type: Icons.Feather,
    icon: 'search',
    color: COLORS.Primary,
    alphaClr: COLORS.Secondary,
  },
  {
    route: 'Bill Payment',
    label: 'Bill Payment',
    type: Icons.Feather,
    icon: 'plus-square',
    color: COLORS.Primary,
    alphaClr: COLORS.Secondary,
  },
  {
    route: 'Profile',
    label: 'Profile',
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
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tabs>
  );
};
