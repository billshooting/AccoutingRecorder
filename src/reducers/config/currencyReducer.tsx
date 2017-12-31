const INIT_VALUE = {
    currency: 'RMB'
};

const CURR_TYPE = 'CHANGE_CURR';

const currencyReducer = (state = INIT_VALUE, action: any) => {
    switch (action.type) {
        case CURR_TYPE: return Object.assign({}, state, { currency: action.value });
        default: return state;
    }
};

export default currencyReducer;