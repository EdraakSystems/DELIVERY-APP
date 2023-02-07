import React from 'react';
import {View, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import COMMON_STYLES from '../../themes/Styles';
import styles from './style';
import {SVG} from '../../constants/Svg';
import {SvgXml} from 'react-native-svg';
import SelectVehicleItem from '../../components/SelectVehicleItem';
import BackIcon from '../../components/BackIcon';
import {Button} from '../../components/Button';
import {BUTTON_STRINGS, DRIVER_STRINGS} from '../../constants/Strings';
import moment from 'moment';
import TruckLoadingModal from '../../components/TruckLoadingModal';
import {isPad, responsiveWidth} from '../../Utils/ScalingUtils';
import {openSmsUrl, openPhoneUrl} from '../../Utils/CommonUtils';

class Driver extends React.PureComponent {
  state = {
    collapsed: true,
    selectedVehicleIndex: undefined,
    driverState: '',
    modalVisible: false,
  };

  renderCurrentMarker = () => {
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

  renderItem = ({item, index}) => {
    const {selectedVehicleIndex} = this.state;
    const isSelected = selectedVehicleIndex === index;
    return (
      <SelectVehicleItem
        item={item}
        isSelected={isSelected}
        onPress={() => this.setState({selectedVehicleIndex: index})}
      />
    );
  };

  renderBack = () => {
    const {navigation} = this.props;
    return <BackIcon isDark navigation={navigation} />;
  };

  renderDriverDetails = () => {
    return (
      <View>
        <View style={styles.profileContainer}>
          <Image
            source={{uri: 'https://picsum.photos/200'}}
            style={styles.userImage}
          />
          <View style={[COMMON_STYLES.flex, styles.marginLeft]}>
            <Text style={styles.driverNameText}>Shiv Kumar</Text>
            <View style={COMMON_STYLES.rowAlignCenter}>
              <SvgXml
                xml={SVG.STAR}
                height={isPad ? 25 : 16}
                width={isPad ? 25 : 16}
              />
              <Text style={styles.rateText}>4.9 (154 trips)</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => openPhoneUrl('1234567890')}>
            <SvgXml
              xml={SVG.CALL}
              height={responsiveWidth(isPad ? 8 : 13)}
              width={responsiveWidth(isPad ? 8 : 13)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openSmsUrl('1234567890', '')}>
            <SvgXml
              xml={SVG.MESSAGE}
              height={responsiveWidth(isPad ? 8 : 13)}
              width={responsiveWidth(isPad ? 8 : 13)}
              style={styles.messageIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.codeText}>PB 65 AZ 6678</Text>
        <View style={styles.horizontalLine} />
      </View>
    );
  };

  renderTripDetails = (component, valueObject, secondLabel) => {
    const svgProps = component
      ? {width: isPad ? 75 : 40, height: isPad ? 60 : 28}
      : {width: isPad ? 120 : 85, height: isPad ? 95 : 60};
    return (
      <View style={styles.truckDetailView(component)}>
        <SvgXml xml={SVG.TRUCK} {...svgProps} />
        <View style={styles.detailChild}>
          <View>
            <Text style={styles.detailTitle}>{DRIVER_STRINGS.TRIP}</Text>
            <Text style={styles.valueText(component)}>10 KM</Text>
          </View>
          <View>
            <Text style={styles.detailTitle}>
              {secondLabel || DRIVER_STRINGS.ETA}
            </Text>
            <Text style={styles.valueText(component)}>7 Mins</Text>
          </View>
          <View>
            <Text style={styles.detailTitle}>{DRIVER_STRINGS.PRICE}</Text>
            <Text style={styles.valueText(component)}>₹ 500.00</Text>
          </View>
          {component ? component : null}
        </View>
      </View>
    );
  };

  renderSelectDriver = () => {
    return (
      <View style={styles.detailsView}>
        {this.renderDriverDetails()}
        {this.renderTripDetails()}
        <Button title={BUTTON_STRINGS.CANCEL} isBold />
        <SafeAreaView />
      </View>
    );
  };

  renderDriverArrived = () => {
    const LoadingStarted = (
      <View>
        <Text style={styles.detailTitle}>{DRIVER_STRINGS.STATUS}</Text>
        <Text style={styles.valueText(true)}>
          {DRIVER_STRINGS.LOADING_STARTED}
        </Text>
      </View>
    );
    return (
      <View style={styles.detailsView}>
        {this.renderDriverDetails()}
        {this.renderTripDetails(LoadingStarted)}
        <View style={styles.clockView}>
          <SvgXml
            xml={SVG.CLOCK}
            height={isPad ? 35 : 24}
            width={isPad ? 35 : 24}
          />
          <Text style={styles.timeText}>59:05 mins</Text>
        </View>
        <Text style={styles.loadingMessageText}>
          {DRIVER_STRINGS.LOADING_MESSAGE}
        </Text>
        <SafeAreaView />
      </View>
    );
  };

  renderGoodDispatched = () => {
    const LoadingStarted = (
      <View>
        <Text style={styles.detailTitle}>{DRIVER_STRINGS.STATUS}</Text>
        <Text style={styles.valueText(true)}>{DRIVER_STRINGS.DISPATCHED}</Text>
      </View>
    );
    return (
      <View style={styles.detailsView}>
        {this.renderDriverDetails()}
        {this.renderTripDetails(LoadingStarted)}
        <View style={styles.clockView}>
          <SvgXml
            xml={SVG.CLOCK}
            height={isPad ? 35 : 24}
            width={isPad ? 35 : 24}
          />
          <Text style={styles.timeText}>15 mins ETA </Text>
        </View>
        <Text style={styles.loadingMessageText}>
          {DRIVER_STRINGS.DISPATCHED_MESSAGE}
        </Text>
        <SafeAreaView />
      </View>
    );
  };

  renderUnloadingStarted = () => {
    const LoadingStarted = (
      <View>
        <Text style={styles.detailTitle}>{DRIVER_STRINGS.STATUS}</Text>
        <Text style={styles.valueText(true)}>{DRIVER_STRINGS.UNLOADING}</Text>
      </View>
    );
    return (
      <View style={styles.detailsView}>
        {this.renderDriverDetails()}
        {this.renderTripDetails(LoadingStarted)}
        <View style={styles.clockView}>
          <SvgXml
            xml={SVG.CLOCK}
            height={isPad ? 35 : 24}
            width={isPad ? 35 : 24}
          />
          <Text style={styles.timeText}>40:05 mins </Text>
        </View>
        <Text style={styles.loadingMessageText}>
          {DRIVER_STRINGS.DISPATCHED_MESSAGE}
        </Text>
        <SafeAreaView />
      </View>
    );
  };

  renderCompletedTrip = () => {
    const LoadingStarted = (
      <View>
        <Text style={styles.detailTitle}>{DRIVER_STRINGS.STATUS}</Text>
        <Text style={styles.valueText(true, true)}>
          {DRIVER_STRINGS.COMPLETED}
        </Text>
      </View>
    );
    return (
      <View style={styles.detailsView}>
        {this.renderDriverDetails()}
        {this.renderTripDetails(LoadingStarted, {}, DRIVER_STRINGS.TIME_TAKEN)}
        <Text style={styles.loadingMessageText}>
          {DRIVER_STRINGS.COMPLETED_MESSAGE}
          {moment().format('Do MMM YYYY hh:mm A')}
        </Text>
        <SafeAreaView />
      </View>
    );
  };

  renderWaitingLabor = () => {
    return (
      <View style={styles.waitingView}>
        {this.renderDriverDetails()}
        {this.renderTripDetails()}
        <Button
          icon={SVG.CLOCK}
          iconHeight={isPad ? 35 : 24}
          iconWidth={isPad ? 35 : 24}
          title={BUTTON_STRINGS.WAITING_LABOR}
          isBold
        />
      </View>
    );
  };

  renderModal = () => {
    const {modalVisible} = this.state;
    if (modalVisible) {
      return (
        <TruckLoadingModal
          onRequestClose={() => this.setState({modalVisible: false})}
        />
      );
    }
    return null;
  };

  render() {
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
          {this.renderCurrentMarker()}
        </MapView>
        {this.renderBack()}
        {this.renderSelectDriver()}
        {/* {this.renderDriverArrived()} */}
        {/* {this.renderGoodDispatched()} */}
        {/* {this.renderUnloadingStarted()} */}
        {/* {this.renderCompletedTrip()} */}
        {/* {this.renderWaitingLabor()} */}
        {this.renderModal()}
      </View>
    );
  }
}

export default Driver;
