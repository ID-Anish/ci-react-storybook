import React, { Component } from 'react';
import { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, HeadingSix } from './components/heading';
import TableElement from './components/tableElement';
import { DefaultButton, PrimaryButton, SecondaryButton, LinkButton } from './components/button';


class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="box mb-5">
          <h2>Table styling</h2>
          <TableElement />
        </div>

        <div className="box">
          <h2>Button styling</h2>
          <DefaultButton />
          <PrimaryButton />
          <SecondaryButton />
          <LinkButton />
        </div>

        <div className="box">
          <h2>Heading styling</h2>
          <HeadingOne />
          <HeadingTwo />
          <HeadingThree />
          <HeadingFour />
          <HeadingFive />
          <HeadingSix />
        </div>
      </div>
    );
  }
}

export default App;
