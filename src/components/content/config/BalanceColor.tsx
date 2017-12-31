import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import SelectionItem from './SelectionItem';
import { changeBalanceColor } from '../../../actions/config/changeBalanceColor';

interface IBalanceColor {
    dispatch: Dispatch<any>;
    balanceColor: string;
}

class BalanceColor extends React.Component<IBalanceColor, object> {
    public constructor(props: IBalanceColor) {
        super(props);
    }

    public render() {
        const { dispatch, balanceColor } = this.props;
        return (
            <div>
                <SelectionItem
                    text="红盈绿亏(中国特色)"
                    isSelected={balanceColor.includes('RPGL')}
                    onSelect={() => dispatch(changeBalanceColor('RPGL'))}
                />
                <SelectionItem
                    text="绿盈红亏(国际惯例)"
                    isSelected={balanceColor.includes('GPRL')}
                    onSelect={() => dispatch(changeBalanceColor('GPRL'))}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        balanceColor: state.config.balanceColor,
    };
};
const connectedBalanceColor = connect(mapStateToProps)(BalanceColor);
export default connectedBalanceColor;