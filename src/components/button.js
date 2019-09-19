import React, { Component } from 'react';
import '../stylesheets/components/_button.scss';

class DefaultButton extends Component {
    render(){
        return(
            <button className="btn btn--default">Default Button</button>
        );
    }
}

class PrimaryButton extends Component {
    render(){
        return(
            <button className="btn btn--primary">Primary Button</button>
        );
    }
}

class SecondaryButton extends Component {
    render(){
        return(
            <button className="btn btn--secondary">Secondary Button</button>
        );
    }
}



export { DefaultButton, PrimaryButton, SecondaryButton };
