import React, { Component } from 'react';
import classnames from 'classnames';
import '../stylesheets/components/_button.scss';

//button
class ButtonElement extends Component{
    render() {
        return (
          <button type={this.props.btnType} className={classnames('btn', this.props.styleName)} onClick = {this.props.click}>
            {this.props.btnText}
          </button>
        );
      }
}


export { ButtonElement };
