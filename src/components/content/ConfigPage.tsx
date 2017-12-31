import * as React from 'react';
import { Switch, Route, } from 'react-router-dom';
import ConnectedConfigIndex from './config/ConfigIndex';
import ConnectedSelectCurrency from './config/SelectCurrency';
import './Page.css';

interface IConfigPageProps {
}

class ConfigPage extends React.Component<IConfigPageProps, object> {
    public constructor(props: IConfigPageProps) {
        super(props);
    }

    public render() {
        return (
            <Switch>
                <Route path="/" exact={true} component={ConnectedConfigIndex} />
                <Route path="/config/currency" component={ConnectedSelectCurrency} />
                <Route component={ConnectedConfigIndex} />
            </Switch>
        );
    }
}

export default ConfigPage;