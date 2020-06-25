import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Dimensions,
	Image,
	StyleSheet,
	View,
	Platform
} from "react-native";
import MapView from 'react-native-maps';
import { Icon, Text } from 'native-base';
import ImageZoom from "react-native-image-pan-zoom";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
});

function ZoomImage ({route, navigation}) {
	let { selected_image } = route.params
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginTop: -32 }}>
			<ImageZoom
				cropWidth={Dimensions.get("window").width}
				cropHeight={Dimensions.get("window").height}
				imageWidth={Dimensions.get("window").width}
				imageHeight={250}>
				<Image
					style={{
						width: Dimensions.get("window").width,
						height: 250
					}}
					source={{
						uri: selected_image
					}}
				/>
			</ImageZoom>
		</View>
	)
}

export default ZoomImage;
