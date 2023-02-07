import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Overlay} from 'react-native-elements';
import {SkypeIndicator} from 'react-native-indicators';
import COLORS from '../../themes/Colors';

const Loader = ({isLoading}: {isLoading: boolean}) => {
    return (
        <>
            <Overlay isVisible={isLoading} overlayStyle={styles.container}>
                <View style={styles.loaderContainer}>
                <SkypeIndicator color={COLORS.GOLD} size={50} />
                </View>
            </Overlay>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent:'center',
        alignItems:'center'
    },
    loaderContainer: {
        height: 80,
        width: 80,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        backgroundColor: COLORS.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            // width: 2,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
});

export default Loader;
