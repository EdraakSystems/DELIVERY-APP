import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
const Stack = createNativeStackNavigator();
import OnBoarding from "../../../screens/onBoarding";
import Splash from "../../../screens/splash";
import {SCREENS} from "../../../constants/Screens";
import VerificationCode from "../../../screens/verification-code";
import Register from "../../../screens/register";
import Login from "../../../screens/login";
import ChooseLocation from "../../../screens/choose-location";
const AuthStack = () => {
  const {user, isFirstTime} = useSelector((state: any) => state.root.user);
    return (
        <>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent"/>
            <Stack.Navigator
                initialRouteName={ isFirstTime ? SCREENS.ONBOARDING : SCREENS.LOGIN}
                screenOptions={{headerShown: false}}>
                <Stack.Screen name={SCREENS.LOGIN} component={Login} />
                <Stack.Screen name={SCREENS.REGISTER} component={Register} />
                <Stack.Screen name={SCREENS.VERIFICATION_CODE} component={VerificationCode}/>
                <Stack.Screen name={SCREENS.SPLASH} component={Splash} />
                <Stack.Screen name={SCREENS.ONBOARDING} component={OnBoarding} />
                <Stack.Screen name={SCREENS.CHOOSE_LOCATION} component={ChooseLocation} />
            </Stack.Navigator>
        </>
    );
};

export default AuthStack;
