/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from './src/scenes/ProductDetails';
import ProductList from './src/scenes/ProductList';
import store from './src/redux';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  console.log({store});

  return (
    <Provider store={store}>
      <SafeAreaProvider style={{backgroundColor: '#f4511e'}}>
        <SafeAreaInsetsContext.Consumer>
          {insets => (
            <View style={{flex: 1, paddingTop: insets?.top}}>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Products">
                  <Stack.Screen
                    options={{
                      headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    }}
                    name="Products"
                    component={ProductList}
                  />
                  <Stack.Screen
                    options={{
                      headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    }}
                    name="ProductDetails"
                    component={ProductDetails}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </View>
          )}
        </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
