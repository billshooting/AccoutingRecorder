import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import * as H from 'history';
import { push } from 'react-router-redux';
import ConfigItem from './ConfigItem';
import ConfigTitle from './ConfigTitle';

interface IConfigIndexProps {
    currency: string;
    location: H.Location;
    dispatch: Dispatch<any>;
    history: H.History;
}

class ConfigIndex extends React.Component<IConfigIndexProps, object> {
    public constructor(props: IConfigIndexProps) {
        super(props);
    }

    public render() {
        const mapOject = {
            RMB: '人民币(RMB)',
            HKD: '港币(HKD)',
            USD: '美元(USD)'
        };
        const curr = mapOject[this.props.currency];
        const dispatch = this.props.dispatch;
        return (
        <div id="config-container" className="flex-container app-content">
            <ConfigTitle text="记账设置" />
            <ConfigItem 
                text="记账货币" 
                value={curr} 
                isLast={false}
                onNavigate={() => dispatch(push('/config/currency'))}  
            />
            <ConfigItem 
                text="汇率设置" 
                value={''} 
                isLast={false}
                onNavigate={() => dispatch(push('/config/foreignEx'))} 
            />
            <ConfigItem 
                text="佣金设置" 
                value={''} 
                isLast={false}
                onNavigate={() => dispatch(push('/config/brokerage'))} 
            />
            <ConfigItem 
                text="收支配色" 
                value={''} 
                isLast={true}
                onNavigate={() => dispatch(push('/config/balanceColor'))} 
            />
            <ConfigTitle text="应用设置" />
            <ConfigItem 
                text="应用升级" 
                value={''} 
                isLast={false}
                onNavigate={() => dispatch(push('/config/update'))} 
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

const ConnectedConfigIndex = connect(mapStateToProps)(ConfigIndex);
export default ConnectedConfigIndex;