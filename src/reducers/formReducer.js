const initialState = {
    currCurrency: 'uah',
    currencyValues: {
        'usd': 26,
        'uah': 1,
        'eur': 30
    }
};
export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENCY':
            return {
                ...state,
                currCurrency: action.payload
            };
        case 'GET_EXCHANGE_RATES':
            return {
                ...state,
                currencyValues:action.payload
            }
    }
    return state;
};