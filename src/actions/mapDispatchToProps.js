import {changeCurrency} from "./changeCurrencyAction";
import {getExchangeRates} from "./getExchangeRates";

export const mapDispatchToProps = dispatch => {
    return {
        onChangeCurr: () => {
            dispatch(changeCurrency())
        },
        getRates: () => {
            dispatch(getExchangeRates())
        }
    }
};