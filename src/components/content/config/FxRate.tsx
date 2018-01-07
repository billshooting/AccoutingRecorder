import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import SwitchInputItem from './SwitchInputItem';

interface IFxRateProps {
    dispatch: Dispatch<any>;
}

class FxRate extends React.Component<IFxRateProps, object> {
    public constructor(props: IFxRateProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <SwitchInputItem />
            </div>
        );
    }
}

const ConnectedFxRate = connect()(FxRate);
export default ConnectedFxRate;