import React, { Component } from 'react';
import '../stylesheets/components/_formElements.scss';
import '../stylesheets/components/_listing.scss';

class InputText extends Component{
    render(){
        return(
            <label className="box">
                <span className="form--label box mb-1">Username</span>
                <input id="username" type="text" className="form--control form--input-text" />
            </label>
        );
    }
}

class InputPswd extends Component{
    render(){
        return(
            <label className="box">
                <span className="form--label box mb-1">Password</span>
                <input id="username" type="password" className="form--control form--input-text" />
            </label>
        );
    }
}

class InputTextArea extends Component{
    render(){
        return(
            <label className="box">
                <span className="form--label box mb-1">Address</span>
                <textarea className="form--control form--control-textarea"></textarea>
            </label>
        );
    }
}

class SelectBox extends Component{
    render(){
        return(
            <label className="box">
                <span className="form--label box mb-1">Country</span>
                <select className="form--control">
                    <option>USA</option>
                    <option>UK</option>
                    <option>Sweden</option>
                </select>
            </label>
        );
    }
}

class InputCheckbox extends Component{
    render(){
        return(
            <label className="box-inline">
                <input type="checkbox" name="item-list-checkbox" className="form--control-checkbox" /> Item one
            </label>
        );
    }
}

class InputRadio extends Component{
    render(){
        return(
            <label className="box-inline">
                <input type="radio" name="item-list-radio" className="form--control-checkbox" /> Item one
            </label>
        );
    }
}


export { InputText, InputPswd, InputTextArea, SelectBox, InputCheckbox, InputRadio };