import React, { Component } from 'react';
import '../stylesheets/components/_table.scss';

class TableElement extends Component {
    render() {
        return(
            <table className="table mb-5">
                <thead>
                    <tr>
                        <th className="table--column table--column-header table--column-three">Head one</th>
                        <th className="table--column table--column-header table--column-three">Head two</th>
                        <th className="table--column table--column-header table--column-three">Head three</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table--column">One</td>
                        <td className="table--column">Two</td>
                        <td className="table--column">Three</td>
                    </tr>
                    <tr>
                        <td className="table--column table--alternate-row">One</td>
                        <td className="table--column table--alternate-row">Two</td>
                        <td className="table--column table--alternate-row">Three</td>
                    </tr>
                    <tr>
                        <td className="table--column">One</td>
                        <td className="table--column">Two</td>
                        <td className="table--column">Three</td>
                    </tr>
                    <tr>
                        <td className="table--column table--alternate-row">One</td>
                        <td className="table--column table--alternate-row">Two</td>
                        <td className="table--column table--alternate-row">Three</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default TableElement;