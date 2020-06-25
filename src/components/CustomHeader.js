import React, { Component } from 'react'
import { DrawerActions } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, TouchableHighlight, View } from "react-native";
import { Body, Button, Header, Icon, Left, Title } from "native-base";
import {connect} from "react-redux";

// configs
import { MAIN_COLOR, ITEM_FONT } from '../configs/Color'
// states
import { updatePageDispatch } from "../states/actions/General/global_all";

const mapStateToProps = state => ({
	root_navigator_page_reducer: state.global_all.root_navigator_page_reducer,
});

const mapDispatchToProps = dispatch => ({
  updatePageDispatch: (page) => {
    dispatch(updatePageDispatch(page))
  },
});

class CustomHeader extends Component {

	_handleOpenSearch = () => {
		return this.props.navigation.navigate('Search')
	}

  _handleGoToProfile = async () => {
		await this.props.updatePageDispatch(1);
    return await this.props.navigation.navigate('RootNavigator')
  }

	render () {
		return (
			<View style={{ flexDirection: 'row', height: 58.5, backgroundColor: MAIN_COLOR }}>
				<View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
					<TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
						<Icon name="menu" type="Entypo" style={{fontSize: 25, color: 'white'}}/>
					</TouchableOpacity>
				</View>
        <View style={{width: this.props.root_navigator_page_reducer == 0 ? '70%' : '80%', padding: 8}}>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Image resizeMode= 'contain' style={{width: 135}} source={require('../../assets/images/icon-app-name.png')} />
					</View>
        </View>
        <View style={{ width: this.props.root_navigator_page_reducer == 0 ? '15%' : '5%', justifyContent: 'center', alignItems: 'center' }}>
					{/*
						this.props.root_navigator_page_reducer == 0 ?
							<TouchableOpacity onPress={() => this._handleGoToProfile()}>
								<Icon name="user-circle-o" type="FontAwesome"  style={{fontSize: 24, color: 'white'}}/>
							</TouchableOpacity>
						:
							null
					*/}
				</View>
			</View>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
