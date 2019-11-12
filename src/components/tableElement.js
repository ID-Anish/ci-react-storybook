import React from 'react';
import classnames from 'classnames';
import '../stylesheets/components/_table.scss';

//fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons'
  //fontawesome icon library
  library.add(faSort, faSortUp, faSortDown)

class CiTable extends React.Component {
    
    // constructor(props){
    //   super(props);
    //   this.getHeader = this.getHeader.bind(this);
    //   this.getRowsData = this.getRowsData.bind(this);
    //   this.getKeys = this.getKeys.bind(this);
    // }
    
    getKeys = function(){
      return Object.keys(this.props.data[0]);
    }
    
    getColumns = function(){
      var keys = this.getKeys();
      return keys.map((key, index)=>{
        return <th scope="col" key={key} className={classnames('', this.props.headerClass)}><i className="box-inline mr-1"><FontAwesomeIcon icon="sort" size="md" /></i>{key.toUpperCase()}</th>
      })
    }
    
    getRows = function(){
      var items = this.props.data;
      var rowClass = this.props.rowClass;
      var keys = this.getKeys();
      return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys} rowClass={rowClass}/></tr>
      })
    }
    
    render() {
        return (
          <div>
            <table className={classnames('table', this.props.tableClass)} role="table">
              <caption className="">Connect.ID Intelligence data table</caption>
              <thead>
                <tr>{this.getColumns()}</tr>
              </thead>
              <tbody>
                {this.getRows()}
              </tbody>
            </table>
          </div>
          
        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]} className={classnames('', props.rowClass)}>{props.data[key]}</td>
  })
}

export { CiTable };