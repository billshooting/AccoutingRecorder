import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

interface IBrokerageProps {
    dispatch: Dispatch<any>;
}

class Brokerage extends React.Component<IBrokerageProps, object> {
    public constructor(props: IBrokerageProps) {
        super(props);
    }

    public render() {
        return <div>Brokerage</div>;
    }
}

const ConnectedBrokerage = connect()(Brokerage);
export default ConnectedBrokerage;