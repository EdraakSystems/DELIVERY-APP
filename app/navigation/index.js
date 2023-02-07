import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../constants/Screens';
import OnBoarding from '../screens/onBoarding';
import ChooseLocation from '../screens/choose-location';
import Login from '../screens/login';
import VerificationCode from '../screens/verification-code';
import Register from '../screens/register';
import ChooseCurrentDropLocation from '../screens/choose-current-drop-location';
import SelectPickupDropLocation from '../screens/select-pickup-drop-location';
import Settings from '../screens/settings';
import Account from '../screens/account';
import Wallet from '../screens/wallet';
import PaymentMethod from '../screens/payment-method';
import RideHistory from '../screens/ride-history';
import Notifications from '../screens/notifications';
import InviteFriends from '../screens/invite-friends/index';
import Invitations from '../screens/invitations';
import SelectVehicle from '../screens/select-vehicle/index';
import Driver from '../screens/driver/index';
import RateExperience from '../screens/rate-experience/index';
import Splash from '../screens/splash';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.SPLASH} component={Splash} />
      <Stack.Screen name={SCREENS.ONBOARDING} component={OnBoarding} />
      <Stack.Screen name={SCREENS.CHOOSE_LOCATION} component={ChooseLocation} />
      <Stack.Screen name={SCREENS.LOGIN} component={Login} />
      <Stack.Screen
        name={SCREENS.VERIFICATION_CODE}
        component={VerificationCode}
      />
      <Stack.Screen name={SCREENS.REGISTER} component={Register} />
      <Stack.Screen
        name={SCREENS.CHOOSE_CURRENT_DROP_LOCATION}
        component={ChooseCurrentDropLocation}
      />
      <Stack.Screen
        name={SCREENS.SELECT_PICKUP_DROP_LOCATION}
        component={SelectPickupDropLocation}
      />
      <Stack.Screen name={SCREENS.SETTINGS} component={Settings} />
      <Stack.Screen name={SCREENS.ACCOUNT} component={Account} />
      <Stack.Screen name={SCREENS.WALLET} component={Wallet} />
      <Stack.Screen name={SCREENS.PAYMENT_METHOD} component={PaymentMethod} />
      <Stack.Screen name={SCREENS.RIDE_HISTORY} component={RideHistory} />
      <Stack.Screen name={SCREENS.NOTIFICATION} component={Notifications} />
      <Stack.Screen name={SCREENS.INVITE_FRIENDS} component={InviteFriends} />
      <Stack.Screen name={SCREENS.INVITATION} component={Invitations} />
      <Stack.Screen name={SCREENS.SELECT_VEHICLE} component={SelectVehicle} />
      <Stack.Screen name={SCREENS.DRIVER} component={Driver} />
      <Stack.Screen name={SCREENS.RATE_EXPERIENCE} component={RateExperience} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
