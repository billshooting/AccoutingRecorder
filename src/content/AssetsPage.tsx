import * as React from 'react';

interface IAssetsPageProps {
    name: string;
}

class AssetsPage extends React.Component<IAssetsPageProps, object> {
    public constructor(props: IAssetsPageProps) {
        super(props);
    }

    public render() {
        return (
        <div id="app-content" className="flex-container">
            {this.props.name}
        </div>
        );
    }
}

export default AssetsPage;