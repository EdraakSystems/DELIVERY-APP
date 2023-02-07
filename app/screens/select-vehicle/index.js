import React, {useEffect, useState} from 'react';
import {
  View,
  PanResponder,
  LayoutAnimation,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import COMMON_STYLES from '../../themes/Styles';
import styles from './style';
import {SVG} from '../../constants/Svg';
import {BUTTON_STRINGS, SELECT_VEHICLE_STRINGS} from '../../constants/Strings';
import {Button} from '../../components/Button';
import {SvgXml} from 'react-native-svg';
import SelectVehicleItem from '../../components/SelectVehicleItem';
import BackIcon from '../../components/BackIcon';
import SearchDriverModal from '../../components/SearchDriverModal/index';
import {SCREENS} from '../../constants/Screens';
import {isPad, responsiveWidth} from '../../Utils/ScalingUtils';
import {getVehicles} from "../../services/generalServices";
import {showToast} from "../../services/HelperService";
import Loader from "../../components/loader";

const DATA = [
  {
    image: SVG.TRUCK,
    vehicleName: 'Tata magic Ace ',
    price: '₹500',
  },
  {
    image: SVG.TRUCK,
    vehicleName: 'Tata magic Ace ',
    price: '₹500',
  },
  {
    image: SVG.TRUCK,
    vehicleName: 'Tata magic Ace ',
    price: '₹500',
  },
];

let panResponder = "";






const SelectVehicle = (props) => {
    const {navigation,route} = props;
    const [collapsed,setCollapsed] = useState(false);
    const [selectedVehicleIndex,setSelectedVehicleIndex] = useState("");
    const [isCodeApplied,setIsisCodeApplied] = useState("");
    const [modalVisible,setModalVisible] = useState(false);
    const [loading,setLoading] = useState(false);
    const [vehicles,setVehicles] = useState([]);


    const GetVehiclesType  = async () => {
        setLoading(true)
        await getVehicles().then((response)=>{
            console.log("response on GetVehicleType ===>>>",response);
            setVehicles(response?.data?.data);
        }).catch((error)=>{
            console.log("error on GetVehicleType ===>>>",error);
        }).finally(()=>setLoading(false))
    };

    console.log("response on vehicles ==vehicles=>>>",vehicles);


  useEffect(()=>{
      GetVehiclesType()
      panResponder = PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onPanResponderRelease: onPanResponderRelease,

      });
  },[])

  const onPanResponderRelease = (event, gestureState) => {
    if (gestureState.dy < -30 || gestureState.dy < 30) {
      LayoutAnimation.linear();
      this.setState({collapsed: false});
    } else {
      LayoutAnimation.linear();
      this.setState({collapsed: true});
    }
  };

  const renderCurrentMarker = () => {
    return (
      <Marker
        anchor={{
          x: 0.5,
          y: 0.5,
        }}
        coordinate={{latitude: 37.78825, longitude: -122.4324}}>
        <SvgXml
          width={responsiveWidth(isPad ? 13 : 22)}
          height={responsiveWidth(isPad ? 13 : 22)}
          xml={SVG.LOCATION_TRACKER}
        />
      </Marker>
    );
  };

  const renderItem = ({item, index}) => {

    const isSelected = selectedVehicleIndex === index;
    return (
      <SelectVehicleItem
        item={item}
        isSelected={isSelected}
        onPress={() => this.setState({selectedVehicleIndex: index})}
      />
    );
  };

  const renderTrucks = () => {

    return (
      <View style={styles.detailsView} {...panResponder.panHandlers}>
          <Loader isLoading={loading}/>
        <SvgXml
          width={25}
          height={25}
          xml={SVG.ARROW_UP}
          style={styles.iconStyle}
        />
        <Text style={styles.truckText}>
          {SELECT_VEHICLE_STRINGS.POPULAR_TRUCK}
        </Text>
        <FlatList
          data={vehicles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          horizontal
          style={styles.flatListContainer}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.promoContainer(isCodeApplied)}>
          <View style={COMMON_STYLES.rowAlignCenter}>
            <View>
              <Text style={styles.cashText}>{SELECT_VEHICLE_STRINGS.CASH}</Text>
              <Text style={styles.priceText}>₹100</Text>
            </View>
            <SvgXml
              xml={SVG.CASH}
              style={styles.cashIcon}
              height={isPad ? 55 : 36}
              width={isPad ? 55 : 36}
            />
          </View>
          <TouchableOpacity
            style={styles.promoView(isCodeApplied)}
            onPress={() => this.setState({isCodeApplied: !isCodeApplied})}>
            <Text style={styles.promoText(isCodeApplied)}>
              {SELECT_VEHICLE_STRINGS.APPLY_PROMO}
            </Text>
            {isCodeApplied ? (
              <Text style={styles.codeText}>PICCKUP80</Text>
            ) : null}
          </TouchableOpacity>
        </View>

        <Button
          title={BUTTON_STRINGS.BOOK_NOW}
          isBold
          onPress={() => navigation.navigate(SCREENS.DRIVER)}
        />
        <SafeAreaView />
      </View>
    );
  };

  const renderBack = () => {
    return <BackIcon navigation={navigation} />;
  };


    return (
      <View style={COMMON_STYLES.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {renderCurrentMarker()}
        </MapView>
        {renderBack()}
        {renderTrucks()}
        {modalVisible ? <SearchDriverModal /> : null}
      </View>
    );

}

export default SelectVehicle;
