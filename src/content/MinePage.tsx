import * as React from 'react';

interface IMinePageProps {
    name: string;
}

class MinePage extends React.Component<IMinePageProps, object> {
    public constructor(props: IMinePageProps) {
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

export default MinePage;