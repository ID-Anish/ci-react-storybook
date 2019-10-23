import React, { Component } from 'react';
import '../stylesheets/components/_formElements.scss';
import '../stylesheets/components/_listing.scss';

class InputLabel extends Component{
    render(){
        return(
            <label className="box form--label box mb-1" for={this.props.labelFor}>{this.props.labelText}</label>
        );
    }
}

class InputField extends Component{
    render(){
        return(
            <input id={this.props.inputID} type={this.props.inputType} className="form--control form--input-text" />
        );
    }
}

class InputTextArea extends Component{
    render(){
        return(
            <textarea id={this.props.textID} className="form--control form--control-textarea"></textarea>
        );
    }
}

class SelectBox extends Component{
    render(){
        return(
            <select id={this.props.selectID} className="form--control">
                <option>USA</option>
                <option>UK</option>
                <option>Sweden</option>
            </select>
        );
    }
}

class InputCheckbox extends Component{
    render(){
        return(
            <label className="box-inline">
                <input type="checkbox" name={this.props.checkboxName} className="form--control-checkbox" /> {this.props.labelText}
            </label>
        );
    }
}

class InputRadio extends Component{
    render(){
        return(
            <label className="box-inline">
                <input type="radio" name={this.props.radioName} className="form--control-checkbox" />  {this.props.labelText}
            </label>
        );
    }
}


export { InputLabel, InputField, InputTextArea, SelectBox, InputCheckbox, InputRadio };