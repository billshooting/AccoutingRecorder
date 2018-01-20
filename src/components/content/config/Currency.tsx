import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import CurrencyItem from './SelectionItem';
import { changeCurrency } from '../../../actions/config/changeCurrency';

interface ICurrencyProps {
    currency: string;
    dispatch: Dispatch<any>;
}

class Currency extends React.Component<ICurrencyProps, object> {
    public constructor(props: ICurrencyProps) {
        super(props);
    }

    public render() {
        const value = this.props.currency || '';
        const dispatch = this.props.dispatch;
        return (
            <div>
                <CurrencyItem 
                    text="人民币 CNY" 
                    isSelected={value.includes('CNY')} 
                    onSelect={() => dispatch(changeCurrency('CNYS'))} 
                />
                <CurrencyItem 
                    text="港 币 HKD" 
                    isSelected={value.includes('HKD')} 
                    onSelect={() => dispatch(changeCurrency('HKD'))} 
                />
                <CurrencyItem 
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
        currency: state.config.currency,
    };
};

const ConnectedCurrency = connect(mapStateToProps)(Currency);

export default ConnectedCurrency;