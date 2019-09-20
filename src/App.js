import React, { Component } from 'react';
import { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, HeadingSix } from './components/heading';
import { TableNormal, TableAlternateRowColor } from './components/tableElement';
import { DefaultButton, PrimaryButton, SecondaryButton, LinkButton } from './components/button';
import { AlertSuccess, AlertWarning, AlertError } from './components/alert';


class App extends Component {
  render(){
    return(
      <div className="App">
        <h1 className="page--heading">React Reusable components</h1>
        
        <div className="box mb-10">
          <h2>Table styling</h2>
          <TableNormal />
          <h3>Table Striped</h3>
          <TableAlternateRowColor />
        </div>

        <div className="box mb-10">
          <h2>Button styling</h2>
          <DefaultButton />
          <PrimaryButton />
          <SecondaryButton />
          <LinkButton />
        </div>

        <div className="box mb-10">
          <h2>Heading styling</h2>
          <HeadingOne />
          <HeadingTwo />
          <HeadingThree />
          <HeadingFour />
          <HeadingFive />
          <HeadingSix />
        </div>

        <div className="box mb-10">
          <h2>Alert message styling</h2>
          <AlertSuccess />
          <AlertWarning />
          <AlertError />
        </div>
      </div>
    );
  }
}

export default App;
