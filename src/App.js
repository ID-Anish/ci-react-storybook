import React, { Component } from 'react';
import { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, HeadingSix } from './components/heading';
import { TableNormal, TableAlternateRowColor } from './components/tableElement';
import { DefaultButton, PrimaryButton, SecondaryButton, LinkButton } from './components/button';
import { AlertSuccess, AlertWarning, AlertError } from './components/alert';
import { PrimaryNavigation, SecondaryNavigation } from './components/navigation';


class App extends Component {
  render(){
    return(
      <div className="App">
        <h1 className="page--heading">React components</h1>
        
        {/*****Table*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Table styling</h2>
          <TableNormal />
          <h3>Table Striped</h3>
          <TableAlternateRowColor />
        </div>

        {/*****Buttons*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Button styling</h2>
          <DefaultButton />
          <PrimaryButton />
          <SecondaryButton />
          <LinkButton />
        </div>

        {/*****Headings*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Heading styling</h2>
          <HeadingOne />
          <HeadingTwo />
          <HeadingThree />
          <HeadingFour />
          <HeadingFive />
          <HeadingSix />
        </div>

        {/*****Alert message*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Alert message styling</h2>
          <AlertSuccess />
          <AlertWarning />
          <AlertError />
        </div>

        {/*****Navbar*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Navbar styling</h2>
          <PrimaryNavigation />
          <SecondaryNavigation />
        </div>

        {/*****Navbar*****/}



      </div>
    );
  }
}

export default App;
