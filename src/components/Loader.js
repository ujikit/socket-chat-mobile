import React from 'react';
import {View, Text, Image, StyleSheet, Modal, TouchableOpacity, Platform, ActivityIndicator} from 'react-native';
import { Icon } from 'native-base';


const Loader = ({show, type}) => {
    return (
        <Modal visible={show} transparent={true}>
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#ffc542" style={{ fontSize: 30 }} />
            </View>
        </Modal>
    );
}

export default Loader;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        // opacity: 0.3,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        flexDirection: 'column'
    }
})
