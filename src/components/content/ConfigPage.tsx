import * as React from 'react';
import { Switch, Route, } from 'react-router-dom';
import ConnectedConfigIndex from './config/ConfigIndex';
import ConnectedCurrency from './config/Currency';
import ConnectedFxRate from './config/FxRate';
import ConnectedBrokerage from './config/Brokerage';
import BalanceColor from './config/BalanceColor';
import './config/Configuration.css';

interface IConfigPageProps {
}

class ConfigPage extends React.Component<IConfigPageProps, object> {
    public constructor(props: IConfigPageProps) {
        super(props);
    }

    public render() {
        return (
            <div id="config-container" className="flex-container app-content">
                <Switch>
                    <Route path="/" exact={true} component={ConnectedConfigIndex} />
                    <Route path="/config/currency" component={ConnectedCurrency} />
                    <Route path="/config/foreignEx" component={ConnectedFxRate} />
                    <Route path="/config/brokerage" component={ConnectedBrokerage} />
                    <Route path="/config/balanceColor" component={BalanceColor} />
                    <Route component={ConnectedConfigIndex} />
                </Switch>
            </div>
        );
    }
}

export default ConfigPage;