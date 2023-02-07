import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './app/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import RootStack from "./app/routes";
import Toast from 'react-native-toast-message';

export default function App() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 0);
  }, []);

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootStack />
              <Toast position={'bottom'} />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
  );
}
