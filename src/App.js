import React, { Component } from 'react';

//router
import Nav from './nav';
import Home from './home';
import About from './about';
import Service from './service';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import { HeadingElement } from './components/heading';
import { TableNormal, TableAlternateRowColor } from './components/tableElement';
import { ButtonElement } from './components/button';
import { AlertElement, AlertElementText } from './components/alert';
import { PrimaryNavigation, SecondaryNavigation } from './components/navigation';
import { BadgeElement } from './components/badge';
import { PagingNav, PagingShowmore } from './components/paging';
import { Breadcrumb, BreadcrumbRound } from './components/breadcrumb';
import { InputLabel, InputField, InputTextArea, SelectBox, InputCheckbox, InputRadio } from './components/formElements';
import { PickDate } from './components/datepicker';

//fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faSpinner, faUniversalAccess, faCode, faCog} from '@fortawesome/free-solid-svg-icons'
  //fontawesome icon library
  library.add(faThumbsUp, faSpinner, faUniversalAccess, faCode, faCog)


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
          <ButtonElement btnType="button" styleName="btn--default mr-2" btnText="Default" />
          <ButtonElement btnType="submit" styleName="btn--primary mr-2" btnText="Primary" />
          <ButtonElement btnType="reset" styleName="btn--secondary mr-2" btnText="Secondary" />
          <ButtonElement btnType="button" styleName="btn--link" btnText="Link" />
        </div>

        {/*****Headings*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Heading styling</h2>
          <HeadingElement level="1" styleName="page--heading-one" headingText="h1 - Heading one" />
          <HeadingElement level="2" styleName="page--heading-two" headingText="h2 - Heading two" />
          <HeadingElement level="3" styleName="page--heading-three" headingText="h3 - Heading three" />
          <HeadingElement level="4" styleName="page--heading-four" headingText="h4 - Heading four" />
          <HeadingElement level="5" styleName="page--heading-five" headingText="h5 - Heading five" />
          <HeadingElement level="6" styleName="page--heading-six mb-0" headingText="h6 - Heading six" />
        </div>

        {/*****Alert message*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Alert message styling</h2>
          <AlertElement alertType="success" styleName="alert--success" alertText="This is success message" />
          <AlertElement alertType="warning" styleName="alert--warning" alertText="This is warning message" />
          <AlertElement alertType="error" styleName="alert--error" alertText="This is error message" />

          <div className="box mt-2">
            <AlertElementText alertType="success" styleName="alert--text-success mb-1" alertText="This is success message" />
            <AlertElementText alertType="warning" styleName="alert--text-warning mb-1" alertText="This is warning message" />
            <AlertElementText alertType="error" styleName="alert--text-error" alertText="This is error message" />
          </div>
        </div>

        {/*****Navbar*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Navbar styling</h2>
          <PrimaryNavigation />
          <SecondaryNavigation />
        </div>

        {/*****Router navigation*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Router Example</h2>
          <Router>
            <Nav />

            <Switch>
              <Route path="/" exact Component={Home}>
                <Home />
              </Route>

              <Route path="/about" Component={About}>
                <About />
              </Route>

              <Route path="/service" Component={Service}>
                <Service />
              </Route>
            </Switch>

          </Router>
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
          <BadgeElement badgetType="default" styleName="badge--default mr-1" badgeText="Default" />
          <BadgeElement badgetType="primary" styleName="badge--primary mr-1" badgeText="Primary" />
          <BadgeElement badgetType="error" styleName="badge--error mr-1" badgeText="Error" />
          <BadgeElement badgetType="warning" styleName="badge--warning mr-1" badgeText="Warning" />
          <BadgeElement badgetType="success" styleName="badge--success" badgeText="Success" />
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
          
          <div className="box mb-8">
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="3x" spin /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="2x" spin /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="lg" spin /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="md" spin /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="spinner" size="sm" spin /></i>
            <i className="box-inline"><FontAwesomeIcon icon="spinner" size="xs" spin /></i>
          </div>

          <div className="box mb-8">
            <i className="box-inline mr-5"><FontAwesomeIcon icon="universal-access" size="3x" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="universal-access" size="2x" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="universal-access" size="lg" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="universal-access" size="md" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="universal-access" size="sm" /></i>
            <i className="box-inline"><FontAwesomeIcon icon="universal-access" size="xs" /></i>
          </div>

          <div className="box mb-8">
            <i className="box-inline mr-5"><FontAwesomeIcon icon="code" size="3x" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="code" size="2x" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="code" size="lg" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="code" size="md" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="code" size="sm" /></i>
            <i className="box-inline"><FontAwesomeIcon icon="code" size="xs" /></i>
          </div>
          
          <div className="box">
            <i className="box-inline mr-5"><FontAwesomeIcon icon="cog" size="3x" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="cog" size="2x" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="cog" size="lg" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="cog" size="md" /></i>
            <i className="box-inline mr-5"><FontAwesomeIcon icon="cog" size="sm" /></i>
            <i className="box-inline"><FontAwesomeIcon icon="cog" size="xs" /></i>
          </div>
        </div>
        
        {/*****Form Elements*****/}
        <div className="box mb-10">
          <h2 className="page--heading-uppercase page--heading-grey">Form elements styling</h2>
          <form className="form--container">
            {/*input text*/}
            <div className="form--row box mb-4">
              <InputLabel labelText="Username" labelFor="userName" />
              <InputField inputType="text" inputID="userName" />
            </div>

            {/*input password*/}
            <div className="form--row box mb-4">
              <InputLabel labelText="Password" labelFor="userPswd" />
              <InputField inputType="password" inputID="userPswd" />
            </div>
          
            {/*input textarea*/}
            <div className="form--row box mb-4">
              <InputLabel labelText="Address" labelFor="userAdd" />
              <InputTextArea textID="userAdd" />
            </div>

            {/*selectbox*/}
            <div className="form--row box mb-4">
              <InputLabel labelText="Country" labelFor="userCountry" />
              <SelectBox selectID="userCountry" />
            </div>

            {/*input checkbox*/}
            <div className="form--row box mb-4">
              <h3 className="mb-2">Checkbox</h3>
              <ul className="box unordered-list m-0 p-0">
                <li className="unordered-list--item mb-2"><InputCheckbox checkboxName="item-list-checkbox1" labelText="Item one" /></li>
                <li className="unordered-list--item mb-2"><InputCheckbox checkboxName="item-list-checkbox2" labelText="Item two" /></li>
                <li className="unordered-list--item"><InputCheckbox checkboxName="item-list-checkbox3" labelText="Item three" /></li>
              </ul>
            </div>

            {/*input radio*/}
            <div className="form--row box mb-4">
              <h3 className="mb-2">Radio</h3>
              <ul className="box unordered-list m-0 p-0">
                <li className="unordered-list--item mb-2"><InputRadio radioName="item-list-radio" labelText="Item one" /></li>
                <li className="unordered-list--item mb-2"><InputRadio radioName="item-list-radio" labelText="Item two" /></li>
                <li className="unordered-list--item"><InputRadio radioName="item-list-radio" labelText="Item three" /></li>
              </ul>
            </div>

            {/*input datepicker*/}
            <div className="form--row box">
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
