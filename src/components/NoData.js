import React, { useState, useEffect } from 'react';
import { Image, RefreshControl, ScrollView, Text, View } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import {connect} from 'react-redux';

// Configs
import { BLACK_FONT, MAIN_COLOR_SECOND } from '../configs/Color'

function NoDataComponent ({image, size_image_width, size_image_height, line1, line2, line3, is_refresh_data, _handleRefreshData}) {

  return (
    <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}} refreshControl={
      <RefreshControl
        title="Tarik untuk refresh"
        tintColor={MAIN_COLOR_SECOND}
        titleColor={MAIN_COLOR_SECOND}
        refreshing={is_refresh_data}
        onRefresh={_handleRefreshData}
      />
    }>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: size_image_width, height: size_image_height}} source={image} />
        <Text style={{color: BLACK_FONT}}>{line1}</Text>
        <Text style={{color: BLACK_FONT, paddingTop: 7}}>{line2}</Text>
        <Text style={{color: BLACK_FONT, paddingTop: 7}}>{line3}</Text>
      </View>
    </ScrollView>
  )
}

export default connect(state => ({}))(NoDataComponent);
