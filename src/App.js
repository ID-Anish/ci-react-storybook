import React, { Component } from 'react';

import { HeadingOne, HeadingTwo, HeadingThree, HeadingFour, HeadingFive, HeadingSix } from './components/heading';
import { TableNormal, TableAlternateRowColor } from './components/tableElement';
import { DefaultButton, PrimaryButton, SecondaryButton, LinkButton } from './components/button';
import { AlertSuccess, AlertWarning, AlertError, AlertSuccessText, AlertWarningText, AlertErrorText } from './components/alert';
import { PrimaryNavigation, SecondaryNavigation } from './components/navigation';
import { BadgeDefault, BadgePrimary, BadgeError, BadgeWarning, BadgeSuccess } from './components/badge';
import { PagingNav, PagingShowmore } from './components/paging';
import { Breadcrumb, BreadcrumbRound } from './components/breadcrumb';
import { InputText, InputPswd, InputTextArea, SelectBox, InputCheckbox, InputRadio } from './components/formElements';
import { PickDate } from './components/datepicker';

//fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faSpinner} from '@fortawesome/free-solid-svg-icons'
  //fontawesome icon library
  library.add(faThumbsUp, faSpinner)




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

          <div className="box mt-2">
            <AlertSuccessText />
            <AlertWarningText />
            <AlertErrorText />
          </div>
        </div>

        {/*****Navbar*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Navbar styling</h2>
          <PrimaryNavigation />
          <SecondaryNavigation />
        </div>

        {/*****Breadcrumb*****/}
        <div className="box mb-10">
            <h2 className="page--heading-uppercase page--heading-grey">Breadcrumb styling</h2>
            <Breadcrumb />
            <BreadcrumbRound />
          </div>

        {/*****Pagination*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Paging styling</h2>
          <PagingNav />
          <PagingShowmore />
        </div>  

        {/*****Badge*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Badge styling</h2>
          <BadgeDefault />
          <BadgePrimary />
          <BadgeError />
          <BadgeWarning />
          <BadgeSuccess />
        </div>

        {/*****Icons*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Icon examples</h2>
          <div className="box mb-8">
            <i className="box-inline mr-5"><FontAwesomeIcon icon="thumbs-up" size="3x" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="thumbs-up" size="2x" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="thumbs-up" size="lg" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="thumbs-up" size="md" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="thumbs-up" size="sm" /></i>
            <i className="box-inline"><FontAwesomeIcon icon="thumbs-up" size="xs" /></i>
          </div>

          <div className="box">
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="3x" spin /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="2x" spin /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="lg" spin /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="md" spin /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="sm" spin /></i>
            <i className="box-inline"><FontAwesomeIcon icon="spinner" size="xs" spin /></i>
          </div>
        </div>
        
        {/*****Form Elements*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Form elements styling</h2>
          <form className="form--container">
            {/*input text*/}
            <div className="form--row box mb-4">
              <InputText />
            </div>

            {/*input password*/}
            <div className="form--row box mb-4">
              <InputPswd />
            </div>
          
            {/*input textarea*/}
            <div className="form--row box mb-4">
              <InputTextArea />
            </div>

            {/*selectbox*/}
            <div className="form--row box mb-4">
              <SelectBox />
            </div>

            {/*input checkbox*/}
            <div className="form--row box mb-4">
              <h3 className="mb-2">Checkbox</h3>
              <ul className="box unordered-list m-0 p-0">
                <li className="unordered-list--item mb-2"><InputCheckbox /></li>
                <li className="unordered-list--item mb-2"><InputCheckbox /></li>
                <li className="unordered-list--item"><InputCheckbox /></li>
              </ul>
            </div>

            {/*input radio*/}
            <div className="form--row box mb-4">
              <h3 className="mb-2">Radio</h3>
              <ul className="box unordered-list m-0 p-0">
                <li className="unordered-list--item mb-2"><InputRadio /></li>
                <li className="unordered-list--item mb-2"><InputRadio /></li>
                <li className="unordered-list--item"><InputRadio /></li>
              </ul>
            </div>

            {/*input datepicker*/}
            <div className="form--row box mb-4">
              <h3 className="mb-2">Datepicker</h3>
              <PickDate />
            </div>
          
          </form>
        </div>
        


      </div>
    );
  }
}

export default App;
