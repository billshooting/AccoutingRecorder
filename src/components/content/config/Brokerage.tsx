import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import ConfigTitle from './ConfigTitle';
import InputItem from './InputItem';
import { changeBrokerage, CNEX, HKEX, USEX } from '../../../actions/config/changeBrokerage';
import { ICNExBrokerageState, IHKExBrokerageState, IUSExBrokerageState } from '../../../types/appTypes';

interface IBrokerageProps 
{
    dispatch: Dispatch<any>;
    CNExBrokerage: ICNExBrokerageState;
    HKExBrokerage: IHKExBrokerageState;
    USExBorkerage: IUSExBrokerageState;
}

class Brokerage extends React.Component<IBrokerageProps, object> 
{
    public constructor(props: IBrokerageProps) 
    {
        super(props);
        this.handleBrokerageChange = this.handleBrokerageChange.bind(this);
    }

    public handleBrokerageChange(subType: string, specificType: string)
    {
        const { dispatch, CNExBrokerage, HKExBrokerage, USExBorkerage } = this.props; 
        switch (subType)
        {
            case CNEX: 
            {
                return (value: object) => 
                    dispatch(changeBrokerage(CNEX, 
                                             Object.assign({}, CNExBrokerage, {[specificType]: value})));
            }
            case HKEX:
            {
                return (value: object) => 
                    dispatch(changeBrokerage(HKEX, 
                                             Object.assign({}, HKExBrokerage, {[specificType]: value})));
            }
            case USEX:
            {
                return (value: object) => 
                    dispatch(changeBrokerage(USEX, 
                                             Object.assign({}, USExBorkerage, {[specificType]: value})));
            }
            default: return (value: object) => null;
        }
    }

    public render() 
    {
        const { CNExBrokerage, HKExBrokerage, USExBorkerage } = this.props;
        return (
            <div>
                <ConfigTitle text="大陆市场: CNY" />               
                <InputItem
                    value={CNExBrokerage.brokerageAShare}
                    label="A股佣金"
                    unit="%%"
                    placeholder="万二"
                    onChange={this.handleBrokerageChange(CNEX, 'brokerageAShare')}
                    disable={false}
                /> 
                <InputItem
                    value={CNExBrokerage.brokerageBShare}
                    label="B股佣金"
                    unit="%%"
                    placeholder="万三"
                    onChange={this.handleBrokerageChange(CNEX, 'brokerageBShare')}
                    disable={false}
                />
                <InputItem
                    value={CNExBrokerage.brokerageBond}
                    label="债券佣金"
                    unit="%%"
                    placeholder="万一"
                    onChange={this.handleBrokerageChange(CNEX, 'brokerageBond')}
                    disable={false}
                />
                <InputItem
                    value={CNExBrokerage.brokerageFund}
                    label="基金佣金"
                    unit="%%"
                    placeholder="万一"
                    onChange={this.handleBrokerageChange(CNEX, 'brokerageFund')}
                    disable={false}
                />
                <InputItem
                    value={CNExBrokerage.tax}
                    label="印花税率"
                    unit="%%"
                    placeholder="千一"
                    onChange={this.handleBrokerageChange(CNEX, 'tax')}
                    disable={true}
                /> 
                <InputItem
                    value={CNExBrokerage.settlementBShare}
                    label="B股结算"
                    unit="%%"
                    placeholder="万五"
                    onChange={this.handleBrokerageChange(CNEX, 'settlementBShare')}
                    disable={true}
                />
                <InputItem
                    value={CNExBrokerage.transerFee}
                    label="过户费率"
                    unit="‰‰"
                    placeholder=""
                    onChange={this.handleBrokerageChange(CNEX, 'transerFee')}
                    disable={true}
                />    
                <ConfigTitle text="港股市场: HKD" />
                <InputItem
                    value={HKExBrokerage.BrokerageHShare}
                    label="股票佣金"
                    unit="%%"
                    placeholder="万八"
                    onChange={this.handleBrokerageChange(HKEX, 'BrokerageHShare')}
                    disable={false}
                />
                <InputItem
                    value={HKExBrokerage.otherFee}
                    label="其他费率"
                    unit="%%"
                    placeholder="万八"
                    onChange={this.handleBrokerageChange(HKEX, 'otherFee')}
                    disable={false}
                />
                <InputItem
                    value={HKExBrokerage.tax}
                    label="印花税率"
                    unit="%%"
                    placeholder="千一"
                    onChange={this.handleBrokerageChange(HKEX, 'tax')}
                    disable={true}
                />
                <ConfigTitle text="美股市场: USD" />
                <InputItem
                    value={USExBorkerage.BrokerageShare}
                    label="股票佣金"
                    unit="$/股"
                    placeholder="每股"
                    onChange={this.handleBrokerageChange(USEX, 'BrokerageShare')}
                    disable={false}
                />
                <InputItem
                    value={USExBorkerage.otherFee}
                    label="外部机构"
                    unit="$/股"
                    placeholder="每股"
                    onChange={this.handleBrokerageChange(USEX, 'otherFee')}
                    disable={false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => 
{
    return {
        CNExBrokerage: state.config.brokerage.CNEx,
        HKExBrokerage: state.config.brokerage.HKEx,
        USExBorkerage: state.config.brokerage.USEx,
    };
};

const ConnectedBrokerage = connect(mapStateToProps)(Brokerage);
export default ConnectedBrokerage;