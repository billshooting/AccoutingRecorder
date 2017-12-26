import * as React from 'react';

interface IBillsPageProps {
    location: { pathname: string };
}

class BillsPage extends React.Component<IBillsPageProps, object> {
    public constructor(props: IBillsPageProps) {
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

export default BillsPage;