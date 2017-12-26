import * as React from 'react';
import './Navigator.css';

interface INavigatorPros {
    name: string;
    friendlyName: string;
    glyphicon: string;
    selected: boolean;
}

class Navigator extends React.Component<INavigatorPros, object> {
    public constructor(props: INavigatorPros) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }

    public handlerClick() {
        return null;
    }

    public render() {
        const ifSelected = this.props.selected ? 'selected' : '';
        const className = `navigator-button flex-container ${ifSelected}`;
        return (
            <div className={className} onClick={this.handlerClick}>
                <div className="navigator-icon">
                    <span className={this.props.glyphicon} />
                </div>
                <div className="navigator-name">
                    {this.props.friendlyName}
                </div>
            </div>
        );
    }
}

export default Navigator;