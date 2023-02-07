import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {connect, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ScreenBackground from '../../components/ScreenBackground';
import LogoHeader from '../../components/LogoHeader';
import Input from '../../components/TextInput';
import {REGISTER_STRINGS, BUTTON_STRINGS} from '../../constants/Strings';
import styles from './style';
import COMMON_STYLES from '../../themes/Styles';
import Dropdown from '../../components/Dropdown';
import {SVG} from '../../constants/Svg';
import {Button} from '../../components/Button';
import {resetRoute} from '../../Utils/NavigationUtils';
import {SCREENS} from '../../constants/Screens';
import {REQUEST_SIGNUP} from '../../redux/actions/authActions';
import {loginUser, signupUser} from "../../services/AuthService";
import Loader from "../../components/loader";
import {setUser} from "../../redux/reducers/userReducer";
import {showToast} from "../../services/HelperService";
import {navigate} from "../../services/NavService";

const Register = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const [phoneNumber,setPhoneNumber] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [emailId,setEmailId] = useState("");
  const [loading,setLoading] = useState(false);

  const isDisabled = () => {
    return (
      phoneNumber.trim().length === 0 ||
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      emailId.trim().length === 0
    );
  };
  useEffect(()=>{
  },[])

  const onSignup = async () => {
    // const params = {
    //   email: emailId,
    //   phone: phoneNumber,
    //   countryCode: '+91',
    //   name: `${firstName} ${lastName}`,
    //   latitude: 0,
    //   longitude: 0,
    // };
    let params = {
      "phone": phoneNumber,
        "name": `${firstName} ${lastName}`,
        "latitude": 0,
        "longitude": 0,
        "role": "user",
        "deviceToken": "1234567890",
        "deviceType": 1
    }
    setLoading(true);
    console.log("params ===>>>",params);
    await signupUser(params).then((response)=>{
      console.log("response on signup ===>>>",response);
      props?.navigation.navigate(SCREENS.LOGIN);
    }).catch((error)=>{
      console.log("error on signup ===>>>",error);
      if (error?.response?.data?.errors?.length > 0){
        showToast("Signup",error?.response?.data?.errors[0].message,false)
      }else {
        showToast("Signup",error?.response?.data?.message,false)
      }    }).finally(()=>setLoading(false))

  };

    return (
      <ScreenBackground>
        <Loader isLoading={loading}/>
        <LogoHeader />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled
          contentContainerStyle={COMMON_STYLES.flexGrow}
          style={COMMON_STYLES.flexGrow}
          keyboardShouldPersistTaps={'handled'}>
          <Input
            title={REGISTER_STRINGS.PHONE_NO}
            keyboardType={'phone-pad'}
            wrapperStyle={styles.marginTop}
            value={phoneNumber}
            onChangeText={t => {setPhoneNumber(t)}}
            fromRegister
            renderRightComponent={() => (
              <TouchableOpacity>
                <Text style={styles.changeText}>{REGISTER_STRINGS.CHANGE}</Text>
              </TouchableOpacity>
            )}
          />
          <View style={COMMON_STYLES.rowAlignCenter}>
            <Input
              title={REGISTER_STRINGS.FIRST_NAME}
              wrapperStyle={styles.textInput}
              value={firstName}
              onChangeText={t => {setFirstName(t)}}
              fromRegister
            />
            <Input
              title={REGISTER_STRINGS.LAST_NAME}
              wrapperStyle={[styles.textInput, styles.margin]}
              value={lastName}
              onChangeText={t => {setLastName(t)}}
              fromRegister
            />
          </View>
          <Input
            title={REGISTER_STRINGS.EMAIL_ID}
            keyboardType={'email-address'}
            wrapperStyle={styles.emailTextInput}
            value={emailId}
            onChangeText={t => {setEmailId(t)}}
            fromRegister
          />
          <Dropdown
            value={'name'}
            headerTitle={'name'}
            data={[]}
            // pickerStyle={{
            //   left: responsiveWidth(5) + responsiveHeight(2) + 4,
            //   width: responsiveWidth(90) - responsiveHeight(4),
            // }}
            onChangeText={(value, index) => {}}
            renderBase={() => (
              <View style={styles.dropdownBase}>
                <View>
                  <Text style={styles.dropdownTitle}>
                    {REGISTER_STRINGS.REQUIREMENT}
                  </Text>
                  <Text style={styles.dropdownText}>
                    I will be using Pickkup
                  </Text>
                </View>
                <SvgXml width={14} height={10} xml={SVG.ARROW_DOWN} />
              </View>
            )}
          />
          <Text style={styles.promoText}>{REGISTER_STRINGS.PROMO_CODE}</Text>
          <Button
            title={BUTTON_STRINGS.SIGN_UP}
            isBold
            disabled={isDisabled()}
            onPress={onSignup}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.otpText}>{REGISTER_STRINGS.OTP_MESSAGE}</Text>
          </View>
        </KeyboardAwareScrollView>
      </ScreenBackground>
    );
}
export default Register;
