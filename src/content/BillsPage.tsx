import * as React from 'react';

interface IBillsPageProps {
    name: string;
}

class BillsPage extends React.Component<IBillsPageProps, object> {
    public constructor(props: IBillsPageProps) {
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

export default BillsPage;