export const changeCurrency = (newCurrency) => {
    return {
        type: "CHANGE_CURRENCY",
        payload: newCurrency
    }
};