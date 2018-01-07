import * as React from 'react';

interface IInputItemProps 
{
    value: { rate: number; minimum: number };
    label: string;
    unit: string;
    placeholder: string;
    disable: boolean;
    onChange: (value: { rate: number; minimum: number }) => void;
}

class InputItem extends React.Component<IInputItemProps, object> 
{
    public constructor(props: IInputItemProps) 
    {
        super(props);
        this.generateHandler = this.generateHandler.bind(this);
    }

    public generateHandler(type: string)
    {
        const { value, onChange } = this.props;
        if (type === 'rate')
        {
            return (event: React.ChangeEvent<any>) =>
            {
                const v = event.target.value;
                let newRate = v ? Number.parseFloat(v) : 0;
                let newValue = { rate: newRate, minimum: value.minimum};
                onChange(newValue);
            };
        }
        else
        {
            return (event: React.ChangeEvent<any>) =>
            {
                const v = event.target.value;
                let newMini = v ? Number.parseInt(v) : 0;
                let newValue = { rate: value.rate, minimum: newMini};
                onChange(newValue);
            };
        }
    }

    public render() {
        const { value, label, unit, placeholder, disable } = this.props;
        const { rate, minimum } = value;
        return (
            <div className="form-group config-input">
                <label>
                    <span style={{display: 'inline-block', minWidth: '60px'}}>{label}</span>
                    <input 
                        value={rate}
                        type="number" 
                        placeholder={placeholder}
                        className="form-control" 
                        min="0" 
                        step="0.1"
                        style={{width: '80px'}}
                        disabled={disable} 
                        onChange={this.generateHandler('rate')} 
                    />
                </label>
                <span style={{display: 'inline-block', minWidth: '40px'}}>{unit}</span>
                <label>
                    <span style={{display: 'inline-block', minWidth: '30px'}}>最低</span>
                    <input
                        value={minimum} 
                        type="number" 
                        placeholder="￥/$"
                        className="form-control" 
                        min="0" 
                        style={{width: '60px'}} 
                        onChange={this.generateHandler('minimum')} 
                        disabled={disable} 
                    />
                </label>
            </div>
        );
    }
}

export default InputItem;