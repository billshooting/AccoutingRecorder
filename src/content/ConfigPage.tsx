import * as React from 'react';
import ConfigItem from './config/ConfigItem';
import './Components.css';

interface IConfigPageProps {
    name: string;
}

class ConfigPage extends React.Component<IConfigPageProps, object> {
    public constructor(props: IConfigPageProps) {
        super(props);
    }

    public render() {
        return (
        <div id="config-content" className="flex-container app-content">
            <ConfigItem text="记账货币" onNavigate={null} />
            <ConfigItem text="汇率设置" onNavigate={null} />
            <ConfigItem text="佣金设置" onNavigate={null} />
        </div>
        );
    }
}

export default ConfigPage;