import * as React from 'react';

interface IMinePageProps {
    location: { pathname: string };
}

class MinePage extends React.Component<IMinePageProps, object> {
    public constructor(props: IMinePageProps) {
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

export default MinePage;