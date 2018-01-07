const CHANGE_BROKERAGE_TYPE = 'CONFIG/CHANGE_BROKERAGE_COLOR';
const CNEX = `${CHANGE_BROKERAGE_TYPE}/MAINLANDEX`;
const HKEX = `${CHANGE_BROKERAGE_TYPE}/HKEX`;
const USEX = `${CHANGE_BROKERAGE_TYPE}/USEX`;

const changeBrokerage = (subType: string, newBrokerage: any) => 
{
    return {
        type: CHANGE_BROKERAGE_TYPE,
        subType: subType,
        brokerage: newBrokerage,
    };
};

export { changeBrokerage };
export { CHANGE_BROKERAGE_TYPE };
export { CNEX, HKEX, USEX };