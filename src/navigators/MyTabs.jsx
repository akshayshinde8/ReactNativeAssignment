import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyStack from './MyStack';
import Counter from '../screens/Counter';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MyStack} />
      <Tab.Screen name="Counter" component={Counter} />
    </Tab.Navigator>
  );
}

export default MyTabs;
