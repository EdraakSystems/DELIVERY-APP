import React, {useState} from 'react';
import {Text} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import ScreenBackground from '../../components/ScreenBackground';
import LogoHeader from '../../components/LogoHeader';
import {
  HEADER_STRINGS,
  BUTTON_STRINGS,
  VERIFICATION_STRINGS,
} from '../../constants/Strings';
import styles from './style';
import {Button} from '../../components/Button';
import OTPTextInput from '../../components/OTPTextInput';
import Loader from "../../components/loader";
import {verifyOTP} from "../../services/AuthService";
import {setAuthToken, setIsFirstTime} from "../../redux/reducers/userReducer";


const VerificationCode = (props) => {
  const {route} = props;
    const [loading,setLoading] = useState(false);
    const phone = route?.params?.phone;
    const dispatch = useDispatch();


    const [otp,setOtp] = useState("");
  const getMaskedNumber = () => {
    const lastDigit = phone.slice(-2);
    return `${Array(phone.length - 2)
      .fill('*')
      .join('')}${lastDigit}`;
  };

  const onVerifyCode = async () => {
    let params = {
        "otp": otp,
        "phone": phone
        }
        setLoading(true)
        verifyOTP(params).then((response)=>{
            console.log("response of verify otp ===>>>",response);
            dispatch(setAuthToken(response?.data?.data?.accessToken));
            dispatch(setIsFirstTime(false));
        }).catch((error)=>{
            console.log("error of verify otp ===>>>",error);
        }).finally(()=>setLoading(false))
  };

    return (
      <ScreenBackground>
          <Loader isLoading={loading}/>
        <LogoHeader rightButtonText={HEADER_STRINGS.RESEND} />
        <Text style={styles.titleText}>
          {VERIFICATION_STRINGS.VERIFICATION_CODE}
        </Text>
        <Text style={styles.messageText}>
          {VERIFICATION_STRINGS.VERIFICATION_CODE_MESSAGE} {phone}
        </Text>
        <OTPTextInput
          handleTextChange={t => setOtp(t)}
          inputCount={6}
          keyboardType="number-pad"
          defaultValue={otp}
          cellTextLength={1}
        />
        <Button
          title={BUTTON_STRINGS.SUBMIT}
          isBold
          // disabled={isDisabled()}
          onPress={()=>{onVerifyCode()}}
        />
      </ScreenBackground>
    );
}
export default VerificationCode;
