import React, { Component } from 'react';
import {connect} from 'react-redux';
class Form extends Component{
    handleSelect = ()=>{

    };
    render(){
        return(
            <Form>
                <label>
                    Select currency:
                    <select>
                        <option value="usd">USD</option>
                        <option selected value="uah">UAH</option>
                        <option value="eur">EUR</option>
                    </select>
                </label>
                <input type="text" placeholder="Enter amount"/>
                <input type="text" readOnly/>
                <input type="text" readOnly/>
                <button>Calculate</button>
            </Form>
        );
    }
}

export default connect({},{})(Form)