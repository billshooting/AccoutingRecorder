import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from 'react-redux';
// import { push } from 'react-router-redux';
import * as History from 'history';
import Navigator from './Navigator';
import './Footer.css';

interface IFooterProps {
    location: History.Location;
    dispatch: Dispatch<any>;
}

class Footer extends React.Component<IFooterProps, object> {
    public constructor(props: IFooterProps) {
        super(props);
    }

    public render() {
        const mainPath = this.props.location.pathname.split('/')[1];
        return (
        <div id="app-footer" className="flex-container">
            <Link className="footer-link" to="/assets">
                <Navigator
                    name="Assets" 
                    friendlyName="资产" 
                    glyphicon="glyphicon glyphicon-yen" 
                    selected={mainPath === 'assets' ? true : false} 
                />
            </Link>
            <Link className="footer-link" to="/bills">
                <Navigator 
                    name="Bills" 
                    friendlyName="账单" 
                    glyphicon="glyphicon glyphicon-tasks" 
                    selected={mainPath === 'bills' ? true : false} 
                />
            </Link>
            <Link className="footer-link" to="/config">
                <Navigator 
                    name="Config" 
                    friendlyName="设置" 
                    glyphicon="glyphicon glyphicon-cog" 
                    selected={mainPath === 'config' ? true : false} 
                />
            </Link>
            <Link className="footer-link" to="mine">
                <Navigator 
                    name="Mine" 
                    friendlyName="我的" 
                    glyphicon="glyphicon glyphicon-user" 
                    selected={mainPath === 'mine' ? true : false} 
                />
            </Link>
        </div>
        );
    }
}

export default Footer;