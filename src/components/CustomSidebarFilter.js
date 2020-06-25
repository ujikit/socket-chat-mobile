import React, { Component } from "react";
import { ActivityIndicator, Text, FlatList, Image, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import { Badge, Container, Content, View, Button, Fonts, Input, Header, Footer, FooterTab, Text as NBText, Icon } from 'native-base'
import { connect } from "react-redux";

// configs
import API from '../configs/API';
import { MAIN_COLOR, BLACK_FONT, SUB_ITEM_FONT, SUCCESS, DANGER, SECONDARY} from '../configs/Color'
// states
import { getAllResultSearchVoucherDispatch } from "../states/actions/Voucher/voucher_all_action";

  const mapStateToProps = state => ({
    me_reducer: state.profile_all.me_reducer,
    search_voucher_parameter_reducer: state.global_all.search_voucher_parameter_reducer,
  });

  const mapDispatchToProps = dispatch => ({
    getAllResultSearchVoucherDispatch: (user_token, page, params) => {
      dispatch(getAllResultSearchVoucherDispatch(user_token, page, params));
    },
  });

type Props = {}
class CustomSidebarFilter extends Component<Props> {

  constructor() {
    super();
    this.state = {
      page: 1,
      search_string: '',
      selected_category_voucher: '',
      current_filter_category_voucher: '',
      is_fetching_category_voucher_data: true,
      all_category_voucher: [],
      selected_category_voucher: null,
    };
  }

  async componentDidMount() {
    this._handleFetchCategoryVoucher();
  }

  _handleFetchCategoryVoucher = async () => {
    await this.setState({ is_fetching_category_voucher_data: true });
    API.get_all_voucher_category(JSON.parse(await AsyncStorage.getItem('user_token')))
      .then(async response => {
        console.log('get_all_voucher_category_success', response);
        if (response.code == 200) {
          await this.setState({
            all_category_voucher: response.payload,
            is_fetching_category_voucher_data: false
          });
          this._handleInitButtonColorCategoryVoucher();
        }
      })
      .catch(async error => {
        await this.setState({ is_fetching_category_voucher_data: false });
        console.log('get_all_voucher_category_error', error.response);
        if (error.response.status == 401) {
          return ToastComponent(`Sesi anda telah habis. Mohon login kembali.`);
        }
        return ToastComponent(`Ada kesalahan pada server. ${error.response.data.message}`);
      });
  }

  _handleInitButtonColorCategoryVoucher = async () => {
    for (var i = 0; i < this.state.all_category_voucher.length; i++) {
      await this.setState({
        [`filter_border_color_${this.state.all_category_voucher[i].name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`]: BLACK_FONT,
        [`filter_background_color_${this.state.all_category_voucher[i].name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`]: 'white',
        [`filter_font_color_${this.state.all_category_voucher[i].name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`]: BLACK_FONT,
        selected_category_voucher: null,
      })
    }
  }

  _handleSelectedCategoryVoucher = async (item) => {
    if (this.state[`filter_border_color_${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`] == MAIN_COLOR) {
      return await this._handleInitButtonColorCategoryVoucher();
    }
    await this._handleInitButtonColorCategoryVoucher();
    await this.setState({
      [`filter_border_color_${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`]: MAIN_COLOR,
      [`filter_background_color_${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`]: MAIN_COLOR,
      [`filter_font_color_${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`]: 'white',
      selected_category_voucher: item
    })
  }

  _handlePressReset = () => {
    this._handleInitButtonColorCategoryVoucher()
  }

  _handlePressFilter = async () => {
    this.props.navigation.closeDrawer();
    let params = {
      name: this.props.search_voucher_parameter_reducer.search_string || '',
      voucher_category_id: this.state.selected_category_voucher !== null ? this.state.selected_category_voucher.id : '',
    }

    await this.props.getAllResultSearchVoucherDispatch(this.props.me_reducer.api_token, this.state.page, params)
  }

  render() {
    return (
      <Container>
        <View style={{paddingHorizontal: 15, paddingTop: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Icon name="gear" type="EvilIcons" style={{fontSize: 20, color: SUB_ITEM_FONT}}/>
            </View>
            <View style={{paddingLeft: 6, alignItems: 'center'}}>
              <Text style={{color: SUB_ITEM_FONT}}>Filter</Text>
            </View>
          </View>
        </View>
        {
          this.state.is_fetching_category_voucher_data ?
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator color={MAIN_COLOR}/>
            </View>
          :
            <Content style={{paddingHorizontal: 15}}>
              <View style={{marginTop: 10}}>
                <Text style={{color: SUB_ITEM_FONT}}>Kategori Voucher</Text>
                <View style={{flexDirection: 'row', marginTop: 10, alignContent: 'stretch'}}>
                  <FlatList
                    columnWrapperStyle={{ flex: 1, flexWrap: 'wrap' }}
                    numColumns={4}
                    data={this.state.all_category_voucher}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                      <View style={{backgroundColor: 'white', paddingVertical: 8, paddingRight: 12}}>
                        <TouchableOpacity onPress={() => this._handleSelectedCategoryVoucher(item)} style={{flex: 1, borderWidth: 1.1, borderRadius: 4, borderColor: this.state[`filter_border_color_${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`], backgroundColor: this.state[`filter_background_color_${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`]}}>
                          <Text numberOfLines={1} style={{flex: 1, flexWrap: 'wrap', color: this.state[`filter_font_color_${item.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}`], paddingHorizontal: 7, paddingVertical: 4}}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    />
                </View>
              </View>
            </Content>
        }
        <View style={{ flexDirection: 'row', backgroundColor: 'white', bottom: 0, height: 55 }}>
          <TouchableOpacity disabled={this.state.is_fetching_category_voucher_data} onPress={() => this._handlePressReset()} style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3f9db8'}}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 13}}>
              RESET
            </Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={this.state.is_fetching_category_voucher_data} onPress={() => this._handlePressFilter()} style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e7662c'}}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 13}}>
              FILTER
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomSidebarFilter);
