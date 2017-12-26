import { connect } from 'react-redux';
import * as H from 'history';
import Header from '../components/header/Header';

const mapStateToProps = (state: any) => {
    const l: H.Location = state.route.location;
    return {
        location: l
    };
};

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;