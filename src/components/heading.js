import React, { Component } from 'react';
import classnames from 'classnames';
import '../stylesheets/components/_heading.scss';


class HeadingElement extends Component {
    render(){
        const CustomHeading = `h${this.props.level}`;
        return(
            <CustomHeading className={classnames('page--heading', this.props.styleName)}>{this.props.headingText}</CustomHeading>
        );
    }
}

export { HeadingElement };