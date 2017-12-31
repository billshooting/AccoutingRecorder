import { CHANGE_CURR_TYPE } from '../../actions/config/changeCurrency';
const INIT_STATE = 'RMB';

const currencyReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case CHANGE_CURR_TYPE: return action.currency;
        default: return state;
    }
};

export default currencyReducer;