import { combineReducers } from 'redux'

import global_all from './General/global_all_reducer'

const appReducer = combineReducers({
  global_all: global_all,
})

export default appReducer
