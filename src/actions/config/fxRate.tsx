import { Dispatch } from 'react-redux';
// fake API
import { fetchFxAPI } from '../../fakeAPI/fakeFetch';

const SWITCH_FETCH_TYPE = 'CONFIG/FXRATE/SWITCH_FETCH';
const BEGIN_FETCH_RATE = 'CONFIG/FXRATE/BEGIN_FETCH';
const RECEIVE_FETCH_RATE = 'CONFIG/FXRATE/RECEIVE_FETCH';
const CHANGE_FXRATE = 'CONFIG/FXRATE/CHANGE_FXRATE';

const switchFetchFx = (curr: string, newState: boolean) => 
{
    return {
        type: SWITCH_FETCH_TYPE,
        currency: curr,
        switchState: newState,
    };
};

const beginFetchFx = (curr: string, message: string) =>
{
    return {
        type: BEGIN_FETCH_RATE,
        currency: curr,
        message,
    };
};

const receiveFetchFx = (curr: string, rate: string) => 
{
    return {
        type: RECEIVE_FETCH_RATE,
        currency: curr,
        fxRate: rate,
        receivedAt: Date.now()
    };
};

const changeFx = (curr: string, rate: string) =>
{
    return {
        type: CHANGE_FXRATE,
        currency: curr,
        fxRate: rate,
    };
};

export { SWITCH_FETCH_TYPE, BEGIN_FETCH_RATE, RECEIVE_FETCH_RATE, CHANGE_FXRATE };
export { switchFetchFx, beginFetchFx, receiveFetchFx, changeFx };

const fetchFxRate = (positionCurr: string, baseCurr = 'CNY', dispatch: Dispatch<any>) => 
{
    const currPairs = `${positionCurr}/${baseCurr}`;
    dispatch(beginFetchFx(positionCurr, `Begin Fetch ${currPairs}`));
    fetchFxAPI(currPairs)
             .then((rate: number) => dispatch(receiveFetchFx(positionCurr, rate.toString())));
    // return (dispatch: Dispatch<any>) =>
    // {
    //     dispatch(beginFetchFx(currPairs, `Begin Fetch ${currPairs}`));
    //     return fetchFxAPI(currPairs)
    //         .then((rate: number) => receiveFetchFx(positionCurr, rate.toString()));
    // };
};

export { fetchFxRate };