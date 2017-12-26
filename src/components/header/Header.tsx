import * as React from 'react';
import { Dispatch } from 'react-redux';
import * as History from 'history';
import {  } from 'react-router-dom';

interface IHeaderProps {
    location: History.Location;
    dispatch: Dispatch<object>;
}

class Header extends React.Component<IHeaderProps, object> {
    public constructor(props: IHeaderProps) {
        super(props);
    }

    public render() {
        const headerText = {
            assets: '资产',
            bills: '账单',
            config: '设置',
            mine: '我的'
        };
        const mainPath = this.props.location.pathname.split('/')[1];
        const friendlyHeaderText = headerText[mainPath];
        return (
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
        );
    }
}
export default Header;