import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import balanceColorReducer from './balanceColorReducer';
import brokerageReducer from './brokerageReducer';

const configReducer = combineReducers({
    currency: currencyReducer,
    balanceColor: balanceColorReducer,
    brokerage: brokerageReducer,
});
export default configReducer;