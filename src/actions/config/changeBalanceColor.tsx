const CHANGE_BLACLR_TYPE = 'CONFIG/CHANGE_BALANCE_COLOR';

const changeBalanceColor = (newColor: string) => {
    return {
        type: CHANGE_BLACLR_TYPE,
        balanceColor: newColor,
    };
};

export { changeBalanceColor };
export { CHANGE_BLACLR_TYPE };