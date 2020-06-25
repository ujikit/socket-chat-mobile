import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { MAIN_COLOR_SECOND } from '../configs/Color'

const Loading = () => (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<ActivityIndicator size={'large'} color={MAIN_COLOR_SECOND} />
	</View>
);
export default Loading;
