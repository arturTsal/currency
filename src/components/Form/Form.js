import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from '../../actions/mapDispatchToProps';

class Form extends Component{
    render(){
        console.log('---','rendered',this.props);
        return(
            <Form>
                <label>
                    Select currency:
                    <select ref={(select) => {this.selectedCurr = select}}>
                        <option value="usd">USD</option>
                        <option selected value="uah">UAH</option>
                        <option value="eur">EUR</option>
                    </select>
                </label>
                <input type="text" placeholder="Enter amount" ref={(input) => {this.amountInput = input}}/>
                <input type="text" readOnly ref={input => this.firstCurrRate = input}/>
                <input type="text" readOnly ref={input => this.secondCurrRate = input}/>
                <button onClick={this.props.getRates.bind(this)}>Calculate</button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
   return {
       usd: state.currencyValues.usd,
       uah: state.currencyValues.uah,
       eur: state.currencyValues.eur
   }
};

export default connect(mapStateToProps,mapDispatchToProps)(Form)