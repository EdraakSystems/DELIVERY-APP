import React from 'react';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {SCREENS} from "../../../constants/Screens";
import ChooseCurrentDropLocation from "../../../screens/choose-current-drop-location";
import SelectPickupDropLocation from "../../../screens/select-pickup-drop-location";
import Settings from "../../../screens/settings";
import Account from "../../../screens/account";
import Wallet from "../../../screens/wallet";
import PaymentMethod from "../../../screens/payment-method";
import RideHistory from "../../../screens/ride-history";
import Notifications from "../../../screens/notifications";
import InviteFriends from "../../../screens/invite-friends";
import Invitations from "../../../screens/invitations";
import SelectVehicle from "../../../screens/select-vehicle";
import Driver from "../../../screens/driver";
import RateExperience from "../../../screens/rate-experience";
import {useSelector} from "react-redux";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const {user} = useSelector((state) => state.root.user);

  return (
    <Stack.Navigator
      initialRouteName={SCREENS.CHOOSE_CURRENT_DROP_LOCATION}
      screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.CHOOSE_CURRENT_DROP_LOCATION} component={ChooseCurrentDropLocation}/>
        <Stack.Screen name={SCREENS.SELECT_PICKUP_DROP_LOCATION} component={SelectPickupDropLocation}/>
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
};

export default MainStack;
