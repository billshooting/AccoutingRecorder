import * as React from 'react';

interface ISwitchInputItemProps 
{

}

class SwitchInputItem extends React.Component<ISwitchInputItemProps, any> 
{
    public constructor(props: ISwitchInputItemProps)
    {
        super(props);
        this.state = { isChecked: false, isHide: true };
        this.handleSwitch = this.handleSwitch.bind(this);
        this.toggleHide = this.toggleHide.bind(this);
    }

    public handleSwitch()
    {
        const isCheck = this.state.isChecked;
        this.setState({ isChecked: !isCheck });
    }

    public toggleHide() 
    {
        const isHide = this.state.isHide;
        this.setState({ isHide: !isHide });
    }

    public render()
    {
        const display = this.state.isHide ? 'none' : 'block';
        const style = { display: display };
        return (
            <div>
                <div className={this.state.isHide ? 'config-item' : 'config-item-last'} onClick={this.toggleHide}>
                    <span>美元USD</span>
                    <span className=".item-right">6.69</span>
                </div>
                <div className="config-item" style={style}>
                    <span>自动获取</span>
                    <label className="switch">
                        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleSwitch} />
                        <span className="slider round" />
                    </label>
                </div>
            </div>
        )
    }
}

export default SwitchInputItem;