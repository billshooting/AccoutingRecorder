import { SWITCH_FETCH_TYPE, BEGIN_FETCH_RATE, RECEIVE_FETCH_RATE, CHANGE_FXRATE } from '../../actions/config/fxRate';
import { ICurrencyRateState, IFxRateState } from '../../types/appTypes';
const INIT_STATE: IFxRateState = 
{
    CNY: {
        value: '1',
        isAuto: true,
        isFetching: false,
        lastUpdated: Date.now(),
    },
    USD: {
        value: '6.66',
        isAuto: true,
        isFetching: false,
        lastUpdated: Date.now(),
    },
    HKD: {
        value: '0.83',
        isAuto: true,
        isFetching: false,
        lastUpdated: Date.now(),
    },
};

const fxRateReducer = (state = INIT_STATE, action: any) =>
{
    switch (action.type)
    {
        case SWITCH_FETCH_TYPE:
        {
            const { value, isFetching, lastUpdated } = state[action.currency];
            const newCurr: ICurrencyRateState = 
            { 
                value, 
                isAuto: action.switchState, 
                isFetching, 
                lastUpdated,
            };
            return Object.assign({}, state, { [action.currency]: newCurr });
        }
        case BEGIN_FETCH_RATE:
        {
            const { value, isAuto, lastUpdated } = state[action.currency];
            const newCurr = 
            { 
                value, 
                isAuto, 
                isFetching: true, 
                lastUpdated,
            };
            return Object.assign({}, state, { [action.currency]: newCurr });
        }
        case RECEIVE_FETCH_RATE:
        {
            const { isAuto } = state[action.currency];
            const newCurr = 
            { 
                value: action.fxRate, 
                isAuto, 
                isFetching: false, 
                lastUpdated: action.receivedAt, 
            };
            return Object.assign({}, state, { [action.currency]: newCurr });
        }
        case CHANGE_FXRATE:
        {
            const { isAuto, isFetching, lastUpdated } = state[action.currency];
            const newCurr =
            {
                value: action.fxRate,
                isAuto,
                isFetching,
                lastUpdated,
            };
            return Object.assign({}, state, { [action.currency]: newCurr });
        }
        default: return state;
    }
};

export default fxRateReducer;