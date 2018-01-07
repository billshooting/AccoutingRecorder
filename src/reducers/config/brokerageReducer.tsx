import { CHANGE_BROKERAGE_TYPE, CNEX, HKEX, USEX } from '../../actions/config/changeBrokerage';
import { IBrokerageState } from '../../types/appTypes';

const INIT_STATE: IBrokerageState = {
    CNEx: {
        // unit: %%
        brokerageAShare: {
            rate: 2,
            minimum: 5,
        },
        brokerageBShare: {
            rate: 3,
            minimum: 5,
        },
        tax: {
            rate: 10,
            minimum: 0,
        },
        settlementBShare: {
            rate: 5,
            minimum: 0,
        },
        brokerageBond: {
            rate: 1,
            minimum: 0,
        },
        brokerageFund: {
            rate: 2,
            minimum: 0,
        },
        // unit: %%%
        transerFee: {
            rate: 20,
            minimum: 0,
        },
    },
    HKEx: {
        // unit: %%
        BrokerageHShare: {
            rate: 8,
            minimum: 15,
        },
        tax: {
            rate: 10,
            minimum: 0,
        },
        otherFee: {
            rate: 9.7,
            minimum: 0,
        },
    },
    USEx: {
        // unit: $/share
        BrokerageShare: {
            rate: 0.01,
            minimum: 1,
        },
        otherFee: {
            rate: 0.001,
            minimum: 1,
        }
    }
};

const brokerageReducer = (state = INIT_STATE, action: any) => 
{
    if (action.type === CHANGE_BROKERAGE_TYPE) 
    {
        switch (action.subType) 
        {
            case CNEX: return Object.assign({}, state, { CNEx: action.brokerage });
            case HKEX: return Object.assign({}, state, { HKEx: action.brokerage });
            case USEX: return Object.assign({}, state, { USEx: action.brokerage });
            default: return state;
        }
    }
    else { return state; }
};

export default brokerageReducer;