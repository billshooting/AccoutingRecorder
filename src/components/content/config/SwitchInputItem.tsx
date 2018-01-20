import * as React from 'react';

interface ISwitchInputItemProps 
{
    currencyName: string;
    rate: string;
    isAuto: boolean;
    onSwitch: (curr: boolean) => void;
    onManualChange: (newRate: string) => void;
}

class SwitchInputItem extends React.Component<ISwitchInputItemProps, any> 
{
    public constructor(props: ISwitchInputItemProps)
    {
        super(props);
        this.state = { isHide: true };
        this.handleSwitch = this.handleSwitch.bind(this);
        this.toggleHide = this.toggleHide.bind(this);
        this.handleManualChange = this.handleManualChange.bind(this);
    }

    public handleSwitch()
    {
        const { isAuto, onSwitch } = this.props;
        onSwitch(!isAuto);
    }

    public handleManualChange(e: React.ChangeEvent<any>)
    {
        const newValue = e.target.value;
        this.props.onManualChange(newValue);
    }

    public toggleHide() 
    {
        const isHide = this.state.isHide;
        this.setState({ isHide: !isHide });
    }

    public render()
    {
        const { rate, isAuto } = this.props;

        const display = this.state.isHide ? 'none' : 'block';
        const divStyle = { display: display, backgroundColor: '#eee' };
        
        const styleSpan = isAuto ? { color: '#000', fontSize: '1.0rem' } : { color: '#000', fontSize: '1.2rem' };
        let valueSpan = null;
        if (isAuto) { valueSpan = <span className="item-right" style={styleSpan} >{rate}</span>; }
        else { valueSpan = <input type="number" className="input-beautified item-right" style={{ width: '20%'}}  value={this.props.rate} onChange={this.handleManualChange} />; }
        return (
            <div>
                <div className={this.state.isHide ? 'config-item' : 'config-item-last'}>
                    <span style={{display: 'inline-block', width: '80%'}} onClick={this.toggleHide}>{this.props.currencyName}</span>
                    {valueSpan}  
                </div> 
                <div className="config-item" style={divStyle}>
                    <span>自动获取</span>
                    <label className="switch switch-right">
                        <input type="checkbox" checked={isAuto} onChange={this.handleSwitch} />
                        <span className="slider round" />
                    </label>
                </div>
            </div>
        );
    }
}

export default SwitchInputItem;