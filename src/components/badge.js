import React, { Component } from 'react';
import classnames from 'classnames';
import '../stylesheets/components/_badge.scss';

//badge
class BadgeElement extends Component{
    render() {
        return (
          <span type={this.props.badgeType} className={classnames('badge', this.props.styleName)}>
            {this.props.badgeText}
          </span>
        );
      }
}


export { BadgeElement };