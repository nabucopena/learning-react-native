/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';


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

export default App;
