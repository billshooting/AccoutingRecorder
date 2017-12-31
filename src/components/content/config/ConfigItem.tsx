import * as React from 'react';

interface IConfigItemProps {
    text: string;
    value: string;
    onNavigate: null | (() => void);
    isLast: boolean;
}

class ConfigItem extends React.Component<IConfigItemProps, object> {

    public constructor(props: IConfigItemProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick() {
        if (this.props.onNavigate !== null) {
            this.props.onNavigate();
        }
    }
    public render() {
        let value = null;
        if (this.props.value) {
            value = <span className="item-text">{this.props.value}</span>;          
        }
        return (
            <div className={this.props.isLast ? 'config-item-last' : 'config-item'} onClick={this.handleClick}>
                <span className="item-text">{this.props.text}</span>
                <span className="item-value">{value}</span>
                <span className="glyphicon glyphicon-menu-right item-right" />
            </div>
        );
    }
}

export default ConfigItem;