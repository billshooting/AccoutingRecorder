import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import balanceColorReducer from './balanceColorReducer';
import brokerageReducer from './brokerageReducer';
import fxRateReducer from './fxRateReducer';

const configReducer = combineReducers(
{
    currency: currencyReducer,
    balanceColor: balanceColorReducer,
    brokerage: brokerageReducer,
    fxRate: fxRateReducer,
});
export default configReducer;