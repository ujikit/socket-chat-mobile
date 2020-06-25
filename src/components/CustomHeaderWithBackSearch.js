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

class CustomHeaderWithBackSearch extends Component {

	_handleOpenSearch = () => {
		return this.props.navigation.navigate('Search')
	}

	render () {
		return (
			<View style={{ flexDirection: 'row', height: 58.5, backgroundColor: MAIN_COLOR }}>
				<View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<Icon name="md-arrow-back" type="Ionicons" style={{fontSize: 22.5, color: 'white'}}/>
					</TouchableOpacity>
				</View>
				<View style={{width: '80%', padding: 8}}>
          <TouchableHighlight underlayColor="white" onPress={() => this._handleOpenSearch()} style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', borderRadius: 2.5}}>
              <Text style={{ color: 'rgb(128, 126, 126)', fontSize: 13, paddingLeft: 15 }}>Cari Voucher</Text>
              {/*<Input keyboardType="number-pad" placeholder="Cari Voucher" placeholderTextColor="rgb(128, 126, 126)" onChangeText={(_balance_wallet) => this.setState({ balance_wallet: _balance_wallet })} value={this.state.balance_wallet} style={{ color: BLACK_FONT, fontSize: 14, paddingLeft: 15 }} />*/}
          </TouchableHighlight>
        </View>
				<View style={{ width: '5%', justifyContent: 'center', alignItems: 'center' }}>

				</View>
			</View>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeaderWithBackSearch);
