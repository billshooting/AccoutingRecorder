import * as React from 'react';
import * as History from 'history';
import { Store } from 'redux';
import ConnectedHeader from './containers/ConnectedHeader';
import ConnectedFooter from './containers/ConnectedFooter';
import Page from './components/content/Page';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

interface IAppProps {
    location: History.Location;
    store: Store<{}>;
}

interface IAppState {

}
class App extends React.Component<IAppProps, IAppState> {
    public constructor(props: IAppProps) {
        super(props);
    }

    public componentWillReceiveProps(newProps: IAppProps) {
        console.log(newProps.location);
    }
    public render() {
        return (
            <div id="app">
                <ConnectedHeader />
                <Page location={this.props.location} />
                <ConnectedFooter />
            </div>
        );
    }
}

export default App;