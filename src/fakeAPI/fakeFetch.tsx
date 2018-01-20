const fetchFxAPI = (currPairs: string) =>
{
    return new Promise((resolve, reject) =>
    {
        switch (currPairs)
        {
            case 'CNY/CNY': 
                setTimeout(() => resolve(1.000), 1000);
                break;
            case 'USD/CNY': 
                setTimeout(() => resolve(6.410), 1000);
                break;
            case 'HKD/CNY':
                setTimeout(() => resolve(0.812), 1000);
                break;
            default: reject(`${currPairs} is not Current pairs!`);
        }
    });
};

export { fetchFxAPI };