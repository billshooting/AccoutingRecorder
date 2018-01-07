import { CHANGE_BLACLR_TYPE } from '../../actions/config/changeBalanceColor';

// GPRL stands for Green Profit Red Loss
// RPGL stands for Red Profit Green Loss
const INIT_STATE: string = 'GPRL';

const balanceColorReducer = (state = INIT_STATE, action: any) => 
{
    switch (action.type) 
    {
        case CHANGE_BLACLR_TYPE: return action.balanceColor;
        default: return state;
    }
};

export default balanceColorReducer;