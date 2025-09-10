import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs';
import Login from '../screens/Login';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="MyTabs"
    >
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
