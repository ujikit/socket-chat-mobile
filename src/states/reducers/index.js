import { combineReducers } from 'redux'

// choose
import global_all from './General/global_all_reducer'
import profile_all from './Profile/profile_all_reducer'
import merchant_all from './Merchant/merchant_all_reducer'
import voucher_all from './Voucher/voucher_all_reducer'
import merchant_category from './ChooseData/merchant_category_reducer'
import category_voucher_all from './CategoryVoucher/category_voucher_all_reducer'

const appReducer = combineReducers({
  merchant_category: merchant_category,
  global_all: global_all,
  profile_all: profile_all,
  category_voucher_all: category_voucher_all,
  voucher_all: voucher_all,
  merchant_all: merchant_all,
})

export default appReducer
