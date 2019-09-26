import React, { Component } from 'react';
import '../stylesheets/components/_alert.scss';

//alert success
class AlertSuccess extends Component{
    render(){
        return(
            <div className="alert alert--success" role="alert">
                This is success message
            </div>
        );
    }
}

class AlertSuccessText extends Component{
    render(){
        return(
            <div className="alert--text alert--text-success mb-2" role="alert">
                This is success message
            </div>
        );
    }
}

//alert warning
class AlertWarning extends Component{
    render(){
        return(
            <div className="alert alert--warning" role="alert">
                This is warning message
            </div>
        );
    }
}

class AlertWarningText extends Component{
    render(){
        return(
            <div className="alert--text alert--text-warning mb-2" role="alert">
                This is warning message
            </div>
        );
    }
}

//alert error
class AlertError extends Component{
    render(){
        return(
            <div className="alert alert--error" role="alert">
                This is error message
            </div>
        );
    }
}

class AlertErrorText extends Component{
    render(){
        return(
            <div className="alert--text alert--text-error" role="alert">
                This is error message
            </div>
        );
    }
}

export { AlertSuccess, AlertWarning, AlertError, AlertSuccessText, AlertWarningText, AlertErrorText };