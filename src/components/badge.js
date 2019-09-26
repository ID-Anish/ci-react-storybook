import React, { Component } from 'react';
import '../stylesheets/components/_badge.scss';

//default badge
class BadgeDefault extends Component{
    render(){
        return(
            <span className="badge badge--default mr-1">Default</span>
        );
    }
}

//primary badge
class BadgePrimary extends Component{
    render(){
        return(
            <span className="badge badge--primary mr-1">Primary</span>
        );
    }
}

//error badge
class BadgeError extends Component{
    render(){
        return(
            <span className="badge badge--error mr-1">Error</span>
        );
    }
}

//warning badge
class BadgeWarning extends Component{
    render(){
        return(
            <span className="badge badge--warning mr-1">Warning</span>
        );
    }
}

//success badge
class BadgeSuccess extends Component{
    render(){
        return(
            <span className="badge badge--success mr-1">Success</span>
        );
    }
}


export { BadgeDefault, BadgePrimary, BadgeError, BadgeWarning, BadgeSuccess };