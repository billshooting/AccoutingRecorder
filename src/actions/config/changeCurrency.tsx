const CHANGE_CURR_TYPE = 'CONFIG/CHANGE_CURRENCE';
const changeCurrency = (newCurrency: string) => {
    return {
        type: CHANGE_CURR_TYPE,
        currency: newCurrency,
    };
};

export { changeCurrency };
export { CHANGE_CURR_TYPE };