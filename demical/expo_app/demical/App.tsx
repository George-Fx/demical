import {useFonts} from 'expo-font';
import {Provider} from 'react-redux';
import React, {useCallback} from 'react';
import Loader from './src/components/Loader';
import {persistor, store} from './src/store';
import * as SplashScreen from 'expo-splash-screen';
import FlashMessage from './src/components/FlashMessage';
import {PersistGate} from 'redux-persist/integration/react';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Domine-Bold': require('./src/assets/fonts/Domine-Bold.ttf'),
    'NunitoSans-Bold': require('./src/assets/fonts/NunitoSans-Bold.ttf'),
    'NunitoSans-Regular': require('./src/assets/fonts/NunitoSans-Regular.ttf'),
    'NunitoSans-SemiBold': require('./src/assets/fonts/NunitoSans-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <PersistGate
          loading={<Loader />}
          persistor={persistor}
        >
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <FlashMessage />
    </SafeAreaProvider>
  );
}
