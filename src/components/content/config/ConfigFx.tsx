import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

interface IConfigFxProps {
    dispatch: Dispatch<any>;
}

class ConfigFx extends React.Component<IConfigFxProps, object> {
    public constructor(props: IConfigFxProps) {
        super(props);
    }

    public render() {
        return <div>Fx</div>;
    }
}

const ConnectedConfigFx = connect()(ConfigFx);
export default ConnectedConfigFx;