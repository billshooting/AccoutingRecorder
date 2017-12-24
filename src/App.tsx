import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navigator from './header/Navigator';
import Page from './content/Page';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

interface IAppState {
    currentPage: string;
}
class App extends React.Component<object, IAppState> {
    public constructor(props: object) {
        super(props);
        this.state = {
            currentPage: 'Assets'
        };

        this.handleNavigate = this.handleNavigate.bind(this);
    }

    public handleNavigate(target: string) {
        console.log(`to ${target}`);
        this.setState({
            currentPage: target
        });
    }
    public render() {
        const headerText = {
            Assets: '资产',
            Bills: '账单',
            Config: '设置',
            Mine: '我的'
        };
        const friendlyHeaderText = headerText[this.state.currentPage];
        return (
            <div id="app">
                <div id="app-header" className="flex-container">
                    <button className="header-icon">
                        <span className="glyphicon glyphicon-menu-left" />
                    </button>
                    <div className="header-text">
                        <span>{friendlyHeaderText}</span>
                    </div>
                    <button className="header-icon">
                        <span className="glyphicon glyphicon-menu-hamburger" />
                    </button>
                </div>
                <Page name={this.state.currentPage} />
                <div id="app-navigation" className="flex-container">
                    <Navigator
                        name="Assets" 
                        friendlyName="资产" 
                        glyphicon="glyphicon glyphicon-yen" 
                        selected={this.state.currentPage === 'Assets' ? true : false} 
                        onNavigate={this.handleNavigate} 
                    />
                    <Navigator 
                        name="Bills" 
                        friendlyName="账单" 
                        glyphicon="glyphicon glyphicon-tasks" 
                        selected={this.state.currentPage === 'Bills' ? true : false} 
                        onNavigate={this.handleNavigate} 
                    />
                    <Navigator 
                        name="Config" 
                        friendlyName="设置" 
                        glyphicon="glyphicon glyphicon-cog" 
                        selected={this.state.currentPage === 'Config' ? true : false} 
                        onNavigate={this.handleNavigate} 
                    />
                    <Navigator 
                        name="Mine" 
                        friendlyName="我的" 
                        glyphicon="glyphicon glyphicon-user" 
                        selected={this.state.currentPage === 'Mine' ? true : false} 
                        onNavigate={this.handleNavigate} 
                    />
                </div>
            </div>
        );
    }
}

export default App;