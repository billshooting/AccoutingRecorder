import * as React from 'react';

interface IAssetsPageProps {
    location: { pathname: string };
}

class AssetsPage extends React.Component<IAssetsPageProps, object> {
    public constructor(props: IAssetsPageProps) {
        super(props);
    }

    public render() {
        const path = this.props.location.pathname;
        const name = path.split('/')[1];
        return (
        <div id="app-content" className="flex-container">
            {name}
        </div>
        );
    }
}

export default AssetsPage;