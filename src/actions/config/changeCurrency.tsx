const changeCurrency = (theValue: string) => {
    return {
        type: 'CHANGE_CURR',
        value: theValue
    };
};

export default changeCurrency;