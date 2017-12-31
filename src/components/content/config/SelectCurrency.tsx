import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import SelectCurrencyItem from './ConfigCurrencyItem';
import changeCurrency from '../../../actions/config/changeCurrency';

interface ISelectCurrencyProps {
    currency: string;
    dispatch: Dispatch<any>;
}

class SelectCurrency extends React.Component<ISelectCurrencyProps, object> {
    public constructor(props: ISelectCurrencyProps) {
        super(props);
    }

    public render() {
        const value = this.props.currency || '';
        const dispatch = this.props.dispatch;
        return (
            <div id="config-container" className="flex-container app-content">
                <SelectCurrencyItem 
                    text="人民币 RMB" 
                    isSelected={value.includes('RMB')} 
                    onSelect={() => dispatch(changeCurrency('RMB'))} 
                />
                <SelectCurrencyItem 
                    text="港 币 HKD" 
                    isSelected={value.includes('HKD')} 
                    onSelect={() => dispatch(changeCurrency('HKD'))} 
                />
                <SelectCurrencyItem 
                    text="美 元 USD" 
                    isSelected={value.includes('USD')}
                    onSelect={() => dispatch(changeCurrency('USD'))}
                />
            </div>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        currency: state.currency.currency
    };
};

const ConnectedSelectCurrency = connect(mapStateToProps)(SelectCurrency);

export default ConnectedSelectCurrency;