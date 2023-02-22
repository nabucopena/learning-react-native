/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {Text, Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



function App(): JSX.Element {

  const [clicks, setClicks] = useState(0)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> Clicks: {clicks} </Text>
      <Button
        onPress={()=> {
          setClicks(clicks + 1);
        }}
        title="Click me!"
      />
    </View>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text>
      "Home Screen"
    </Text>
    <Button
      title="Profile"
      onPress={() =>
        navigation.navigate("Profile", {name: "Nabuco"})
      }
    />
    </View>
  );
}

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
