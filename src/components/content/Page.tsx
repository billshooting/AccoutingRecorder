import * as React from 'react';
import { Switch, Route, } from 'react-router-dom';
import AssetsPage from './AssetsPage';
import BillsPage from './BillsPage';
import ConfigPage from './ConfigPage';
import MinePage from './MinePage';

interface IPageProps {
    // location: History.Location;
}

class Page extends React.Component<IPageProps, object> {
    public constructor (props: IPageProps) {
        super(props);
    }

    public render() {
        return (
            <Switch>
                <Route path="/" exact={true} component={AssetsPage} />
                <Route path="/assets" component={AssetsPage} />
                <Route path="/bills" component={BillsPage} />
                <Route path="/config" component={ConfigPage} />
                <Route path="/mine" component={MinePage} />
                <Route component={AssetsPage} />
            </Switch>
        );
    }
}

export default Page;