import React, { Component } from 'react';
import '../stylesheets/components/_pagination.scss';

class PagingNav extends Component{
    render(){
        return(
            <ul className="paging box m-0 p-0">
                <li className="paging--item paging--item-btn"><a href="!#" className="paging--item-link is-disabled">Previous</a></li>
                <li className="paging--item"><a href="!#" className="paging--item-link is-active">1</a></li>
                <li className="paging--item"><a href="!#" className="paging--item-link">2</a></li>
                <li className="paging--item"><a href="!#" className="paging--item-link">3</a></li>
                <li className="paging--item"><a href="!#" className="paging--item-link">4</a></li>
                <li className="paging--item"><a href="!#" className="paging--item-link">5</a></li>
                <li className="paging--item paging--item-btn"><a href="!#" className="paging--item-link">Next</a></li>
            </ul>
        );
    }
}

class PagingShowmore extends Component{
    render(){
        return(
            <button className="btn paging--showmore mt-5">{this.props.pagingText}</button>
        );
    }
}

export { PagingNav, PagingShowmore };
