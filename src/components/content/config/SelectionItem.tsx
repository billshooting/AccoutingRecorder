import * as React from 'react';

interface ICurrencyItemProps {
    text: string;
    isSelected: boolean;
    onSelect: null | (() => void);
}

class SelectionItem extends React.Component<ICurrencyItemProps, object> {
    public constructor(props: ICurrencyItemProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick() {
        if (this.props.onSelect !== null) {
            this.props.onSelect();
        }
    }
    public render() {
        let iconOk = null;
        if (this.props.isSelected) {
            iconOk = <span style={{color: '#4CAF50'}} className="glyphicon glyphicon-ok item-right" />;
        }
        return (
            <div className="config-item" onClick={this.handleClick}>
                <span className="item-text">{this.props.text}</span>
                {iconOk}
            </div>
        );
    }
}

export default SelectionItem;