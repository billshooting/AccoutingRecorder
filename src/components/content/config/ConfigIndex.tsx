import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';
import ConfigItem from './ConfigItem';
import ConfigTitle from './ConfigTitle';

interface IConfigIndexProps {
    location: { pathname: string };
    dispatch: Dispatch<any>;
}

class ConfigIndex extends React.Component<IConfigIndexProps, object> {
    public constructor(props: IConfigIndexProps) {
        super(props);
    }

    public render() {
        return (
        <div id="config-container" className="flex-container app-content">
            <ConfigTitle text="记账设置" />
            <ConfigItem text="记账货币" value="人名币(RMB)" onNavigate={() => this.props.dispatch(push('/config/currency'))} />
            <ConfigItem text="汇率设置" value={''} onNavigate={null} />
            <ConfigItem text="佣金设置" value={''} onNavigate={null} />
            <ConfigItem text="收支配色" value={''} onNavigate={null} />
            <ConfigTitle text="应用设置" />
            <ConfigItem text="应用升级" value={''} onNavigate={null} />
        </div>
        );
    }
}

const ConnectedConfigIndex = connect()(ConfigIndex);
export default ConnectedConfigIndex;