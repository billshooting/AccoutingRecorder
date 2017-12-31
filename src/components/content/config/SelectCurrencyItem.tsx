import * as React from 'react';

interface ISelectCurrencyItemProps {
    text: string;
    isSelected: boolean;
    onSelect: null | (() => void);
}

class SelectCurrencyItem extends React.Component<ISelectCurrencyItemProps, object> {
    public constructor(props: ISelectCurrencyItemProps) {
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
            iconOk = <span style={{color: 'green'}} className="glyphicon glyphicon-ok item-right" />;
        }
        return (
            <div className="config-item" onClick={this.handleClick}>
                <span className="item-text">{this.props.text}</span>
                {iconOk}
            </div>
        );
    }
}

export default SelectCurrencyItem;