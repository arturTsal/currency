import {Axios} from 'axios';

export const getExchangeRates = (from = this.selectedCurr.value, amount = parseFloat(this.amountInput.value)) => {

    const rates = {};
    const currencies = ['usd', 'uah', 'eur'].filter(currencyName => currencyName !== from);

    currencies.forEach(currency => {
        const url = `http://data.fixer.io/api/convert?access_key=bfdfc6394bfacc203b3a49926a1db7fe&from=${from}&to=
        ${currency}&amount=${amount}`;

        Axios.get(url)
            .then(response => {
                rates.currency = response.rates[currency];
            })
            .catch(error => alert(error))
    });

    rates.from = amount;

    return {
        type: "GET_EXCHANGE_RATES",
        payload: rates
    }
};