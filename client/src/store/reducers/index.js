import {authReducers} from './auth.reducer';
import {blacklistReducers} from './blacklist.reducers';
import {restaurantReducers }from './restaurant.reducers';
import {visitReducers} from './visits.reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducers,
  blacklist: blacklistReducers,
  restaurants: restaurantReducers,
  visits: visitReducers
});

export default rootReducer;