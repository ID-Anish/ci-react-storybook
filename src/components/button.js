import React, { Component } from 'react';
import '../stylesheets/components/_button.scss';

//default button
class DefaultButton extends Component {
    render(){
        return(
            <button type="button" className="btn btn--default mr-2">Default Button</button>
        );
    }
}

//primary button
class PrimaryButton extends Component {
    render(){
        return(
            <button type="button" className="btn btn--primary mr-2">Primary Button</button>
        );
    }
}

//secondary button
class SecondaryButton extends Component {
    render(){
        return(
            <button type="button" className="btn btn--secondary mr-2">Secondary Button</button>
        );
    }
}

//link button
class LinkButton extends Component {
    render(){
        return(
            <button type="button" className="btn btn--link">Link Button</button>
        );
    }
}



export { DefaultButton, PrimaryButton, SecondaryButton, LinkButton };
