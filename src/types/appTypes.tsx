interface ICNExBrokerageState
{
    // unit: %%
    brokerageAShare: {
        rate: number;
        minimum: number;
    };
    brokerageBShare: {
        rate: number;
        minimum: number;
    };
    tax: {
        rate: number;
        minimum: number;
    };
    settlementBShare: {
        rate: number;
        minimum: number;
    };
    brokerageBond: {
        rate: number;
        minimum: number;
    };
    brokerageFund: {
        rate: number;
        minimum: number;
    };
    // unit: %%%
    transerFee: {
        rate: number;
        minimum: number;
    };
}

interface IHKExBrokerageState
{
    // unit: %%
    BrokerageHShare: {
        rate: number;
        minimum: number;
    };
    tax: {
        rate: number;
        minimum: number;
    };
    otherFee: {
        rate: number;
        minimum: number;
    };
}

interface IUSExBrokerageState
{
    // unit: $/share
    BrokerageShare: {
        rate: number;
        minimum: number;
    };
    otherFee: {
        rate: number;
        minimum: number;
    };
}
interface IBrokerageState 
{
    CNEx: ICNExBrokerageState;
    HKEx: IHKExBrokerageState;
    USEx: IUSExBrokerageState;
}

export { IBrokerageState, ICNExBrokerageState, IHKExBrokerageState, IUSExBrokerageState };