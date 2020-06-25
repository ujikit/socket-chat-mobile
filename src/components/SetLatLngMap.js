import React from "react";
import { Dimensions,View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { Container, Content, Form, Item, Input, Picker, Button, Thumbnail, Label } from "native-base";
import MapView, { Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import {connect} from 'react-redux';

// Redux
import {setLatLngMapDispatch} from '../states/actions/General/global_all';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLatLngMapDispatch: (region) => {
      dispatch(setLatLngMapDispatch(region));
    }
  };
};

type Props = {}
class SetLatLngMap extends React.Component<Props> {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Set Latitude & Longitude</Text>
      </View>
    ),
    headerStyle: {
      backgroundColor: '#ffc542'
    },
    headerTintColor: '#fff'
  });

  constructor() {
    super()
    this.state = {
      name: "",
      latitude: "-7.757109",
      longitude: "110.414429",
      category: "",
      typesSelected: "",
      avatarSource: "",
      initialRegion: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      initPoint: {
        latitude: 0,
        longitude: 0,
      }
    }
  }

  componentWillMount() {
    Geolocation.getCurrentPosition(async info => {
      console.log('sdsdsd', info);
      await this.setState({
        initialRegion: {
          ...this.state.initialRegion,
          latitude: info.coords.latitude,
          longitude: info.coords.longitude
        },
        initPoint: {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude
        },
        latitude: info.coords.latitude,
        longitude: info.coords.longitude
      });
    });
  }

  _handleSetLatLngMap = (region) => {
    this.props.setLatLngMapDispatch(region)
  }

  render() {
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.initialRegion}
          onRegionChangeComplete={region => {
            console.log('dddddd', region);
            this._handleSetLatLngMap(region);
            this.setState({
              initialRegion: {
                ...this.state.initialRegion,
                latitude: region.latitude,
                longitude: region.longitude,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta
              },
              initPoint: {
                latitude: region.latitude,
                longitude: region.longitude
              },
              latitude: region.latitude,
              longitude: region.longitude
            });
          }}
        >
          <Marker coordinate={this.state.initPoint} />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SetLatLngMap)
