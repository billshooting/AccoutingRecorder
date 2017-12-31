import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import balanceColorReducer from './balanceColorReducer';

const configReducer = combineReducers({
    currency: currencyReducer,
    balanceColor: balanceColorReducer,
});
export default configReducer;