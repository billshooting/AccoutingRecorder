import * as React from 'react';

interface IConfigItemProps {
    text: string;
    onNavigate: null | ((target: string) => void);
}

class ConfigItem extends React.Component<IConfigItemProps, object> {
    public constructor(props: IConfigItemProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick() {
        if (this.props.onNavigate !== null) {
            this.props.onNavigate(this.props.text);
        }
    }
    public render() {
        return (
            <div className="config-item" onClick={this.handleClick}>
                <span className="item-text">{this.props.text}</span>
            </div>
        );
    }
}

export default ConfigItem;