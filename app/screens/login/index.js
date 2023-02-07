import React, {useState} from 'react';
import {Text} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import ScreenBackground from '../../components/ScreenBackground';
import LogoHeader from '../../components/LogoHeader';
import {
  HEADER_STRINGS,
  LOGIN_STRINGS,
  BUTTON_STRINGS,
} from '../../constants/Strings';
import styles from './style';
import Input from '../../components/TextInput';
import {Button} from '../../components/Button';
import {SCREENS} from '../../constants/Screens';
import {setUser} from "../../redux/reducers/userReducer";
import Loader from "../../components/loader";
import {loginUser} from "../../services/AuthService";
import {showToast} from "../../services/HelperService";

const Login = (props) => {

  const [phoneNumber,setPhoneNumer] = useState("");
  const [loading,setLoading] = useState(false);
  const {navigation, login} = props;
  const dispatch = useDispatch();

  const isDisabled = () => {
    return phoneNumber.trim().length === 0;
  };

  const onLogin = async () => {
        let params =
      {
          "phone": phoneNumber
      }
        setLoading(true)
        await loginUser(params).then((response)=>{
            console.log("response on login ===>>>",response);
            showToast("Your OTP is",response?.data?.data?.otp,true);
            props?.navigation.navigate(SCREENS.VERIFICATION_CODE,{phone:phoneNumber});
        }).catch((error)=>{
            console.log("error on login ===>>>",error);
            if (error?.response?.data?.errors?.length > 0){
                showToast("Signup",error?.response?.data?.errors[0].message,false)
            }else {
                showToast("Signup",error?.response?.data?.message,false)
            }
        }).finally(()=>setLoading(false))
  };

    return (
      <ScreenBackground>
          <Loader isLoading={loading}/>
        <LogoHeader
          rightButtonText={HEADER_STRINGS.SIGN_UP}
          onPress={() => props.navigation.navigate(SCREENS.REGISTER)}
        />
        <Text style={styles.titleText}>{LOGIN_STRINGS.SIGN_IN}</Text>
        <Text style={styles.messageText}>{LOGIN_STRINGS.SIGN_IN_MESSAGE}</Text>
        <Input
          title={LOGIN_STRINGS.PHONE_NO}
          keyboardType={'phone-pad'}
          wrapperStyle={styles.textInput}
          value={phoneNumber}
          onChangeText={t => {setPhoneNumer(t)}}
        />
        <Button
          title={BUTTON_STRINGS.SIGN_IN}
          isBold
          disabled={isDisabled()}
          onPress={()=>{onLogin()}}
        />
      </ScreenBackground>
    );
}
export default Login;
