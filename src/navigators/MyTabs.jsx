import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyStack from './MyStack';
import Counter from '../screens/Counter';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 65,
          position: 'absolute',
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Counter"
        component={Counter}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="counter" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
