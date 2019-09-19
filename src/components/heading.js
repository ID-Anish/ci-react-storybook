import React, { Component } from 'react';
import '../stylesheets/components/_heading.scss';

class HeadingOne extends Component {
    render(){
        return(
            <h1 className="page--heading page--heading-one">Heading one</h1>
        );
    }
}

class HeadingTwo extends Component {
    render(){
        return(
            <h2 className="page--heading page--heading-two">Heading two</h2>
        );
    }
}

class HeadingThree extends Component {
    render(){
        return(
            <h3 className="page--heading page--heading-three">Heading Three</h3>
        );
    }
}

class HeadingFour extends Component {
    render(){
        return(
            <h4 className="page--heading page--heading-four">Heading Four</h4>
        );
    }
}

class HeadingFive extends Component {
    render(){
        return(
            <h5 className="page--heading page--heading-five">Heading Five</h5>
        );
    }
}

class HeadingSix extends Component {
    render(){
        return(
            <h6 className="page--heading page--heading-six">Heading Six</h6>
        );
    }
}

export { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, HeadingSix };