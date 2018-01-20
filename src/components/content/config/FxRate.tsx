import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import SwitchInputItem from './SwitchInputItem';
import ConfigTitle from './ConfigTitle';
import { ICurrencyRateState } from '../../../types/appTypes';
import { switchFetchFx, fetchFxRate, changeFx } from '../../../actions/config/fxRate';

interface IFxRateProps {
    dispatch: Dispatch<any>;
    baseCurrency: string;
    CNY: ICurrencyRateState;
    USD: ICurrencyRateState;
    HKD: ICurrencyRateState;
}

class FxRate extends React.Component<IFxRateProps, object> 
{
    public constructor(props: IFxRateProps) 
    {
        super(props);
        this.generateSwitchHandler = this.generateSwitchHandler.bind(this);
    }

    public generateSwitchHandler(curr: string, dispatch: Dispatch<any>)
    {
        return (newState: boolean) => 
        {
            dispatch(switchFetchFx(curr, newState));
            if (newState)  
            { 
                fetchFxRate(curr.toUpperCase(), 'CNY', dispatch);
            }
        };
    }

    public render() {
        const { dispatch, CNY, USD, HKD } = this.props;
        return (
            <div>
                <ConfigTitle text={'记账货币：' + this.props.baseCurrency} />
                <SwitchInputItem 
                    currencyName="人民币CNY"
                    rate={CNY.value} 
                    isAuto={CNY.isAuto} 
                    onSwitch={this.generateSwitchHandler('CNY', dispatch)}
                    onManualChange={newRate => dispatch(changeFx('CNY', newRate))} 
                />
                <SwitchInputItem 
                    currencyName="美元USD"
                    rate={USD.value} 
                    isAuto={USD.isAuto} 
                    onSwitch={this.generateSwitchHandler('USD', dispatch)} 
                    onManualChange={newRate => dispatch(changeFx('USD', newRate))}
                />
                <SwitchInputItem 
                    currencyName="港币HKD"
                    rate={HKD.value} 
                    isAuto={HKD.isAuto} 
                    onSwitch={this.generateSwitchHandler('HKD', dispatch)} 
                    onManualChange={newRate => dispatch(changeFx('HKD', newRate))}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any) =>
{
    return {
        baseCurrency: state.config.currency,
        CNY: state.config.fxRate.CNY,
        USD: state.config.fxRate.USD,
        HKD: state.config.fxRate.HKD,
    };
};

const ConnectedFxRate = connect(mapStateToProps)(FxRate);
export default ConnectedFxRate;