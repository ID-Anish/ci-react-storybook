import React, { Component } from 'react';
import '../stylesheets/components/_table.scss';

//Table
class TableNormal extends Component {
    render() {
        return(
            <table className="table mb-5">
                <thead>
                    <tr>
                        <th scope="col" className="table--column table--column-header table--column-three table--row-divider">Head one</th>
                        <th scope="col" className="table--column table--column-header table--column-three table--row-divider">Head two</th>
                        <th scope="col" className="table--column table--column-header table--column-three table--row-divider">Head three</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table--column table--row-divider">One</td>
                        <td className="table--column table--row-divider">Two</td>
                        <td className="table--column table--row-divider">Three</td>
                    </tr>
                    <tr>
                        <td className="table--column table--row-divider">One</td>
                        <td className="table--column table--row-divider">Two</td>
                        <td className="table--column table--row-divider">Three</td>
                    </tr>
                    <tr>
                        <td className="table--column table--row-divider">One</td>
                        <td className="table--column table--row-divider">Two</td>
                        <td className="table--column table--row-divider">Three</td>
                    </tr>
                    <tr>
                        <td className="table--column table--row-divider">One</td>
                        <td className="table--column table--row-divider">Two</td>
                        <td className="table--column table--row-divider">Three</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}


//Table with alternate row color
class TableAlternateRowColor extends Component {
    render() {
        return(
            <table className="table mb-5">
                <thead>
                    <tr>
                        <th scope="col" className="table--column table--column-header table--column-three table--striped-row">Head one</th>
                        <th scope="col" className="table--column table--column-header table--column-three table--striped-row">Head two</th>
                        <th scope="col" className="table--column table--column-header table--column-three table--striped-row">Head three</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table--column">One</td>
                        <td className="table--column">Two</td>
                        <td className="table--column">Three</td>
                    </tr>
                    <tr>
                        <td className="table--column table--striped-row">One</td>
                        <td className="table--column table--striped-row">Two</td>
                        <td className="table--column table--striped-row">Three</td>
                    </tr>
                    <tr>
                        <td className="table--column">One</td>
                        <td className="table--column">Two</td>
                        <td className="table--column">Three</td>
                    </tr>
                    <tr>
                        <td className="table--column table--striped-row">One</td>
                        <td className="table--column table--striped-row">Two</td>
                        <td className="table--column table--striped-row">Three</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}


export { TableNormal, TableAlternateRowColor };