import { connect } from 'react-redux';
import * as H from 'history';
import Footer from '../components/footer/Footer';

const mapStateToProps = (state: any) => {
    const l: H.Location = state.route.location;
    return {
        location: l
    };
};

const ConnectedFooter = connect(mapStateToProps)(Footer);

export default ConnectedFooter;