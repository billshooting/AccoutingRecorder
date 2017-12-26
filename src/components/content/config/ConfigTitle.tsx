import * as React from 'react';

interface IConfigTitleProps {
    text: string;
}

class ConfigTitle extends React.Component<IConfigTitleProps, object> {
    public constructor(props: IConfigTitleProps) {
        super(props);
    }

    public render() {
        return (
            <div className="config-title">
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default ConfigTitle;