import React, { Component } from 'react';
import classnames from 'classnames';
import '../stylesheets/components/_alert.scss';

//alert
class AlertElement extends Component{
    render(){
        return(
            <div type={this.props.alertType} className={classnames('alert', this.props.styleName)} role="alert">
                {this.props.alertText}
            </div>
        );
    }
}

//alert text
class AlertElementText extends Component{
    render(){
        return(
            <div type={this.props.alertType} className={classnames('alert--text', this.props.styleName)} role="alert">
                {this.props.alertText}
            </div>
        );
    }
}


export { AlertElement, AlertElementText };