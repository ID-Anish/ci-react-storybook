import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import '../stylesheets/components/_datepicker.scss';

class PickDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.dateChange = this.dateChange.bind(this);
  }

  dateChange(date) {
    this.setState({
      date: date
    },
     () => {
      console.log(this.state.date);
    });
  }

  render() {
    return (
        <DatePicker className="form--control" selected={this.state.date} onChange={this.dateChange} dateFormat="MMMM d, yyyy" />
    );
  }
}

export { PickDate };