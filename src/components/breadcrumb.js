import React, { Component } from 'react';
import '../stylesheets/components/_breadcrumb.scss';

class Breadcrumb extends Component{
    render(){
        return(
            <nav className="box mb-4" aria-label="breadcrumb">
                <ol class="breadcrumb m-0 p-0">
                    <li class="breadcrumb--item"><a href="!#" class="breadcrumb--item-link">Link one</a></li>
                    <li class="breadcrumb--item"><a href="!#" aria-current="page" class="breadcrumb--item-link is-active">Link two</a></li>
                    <li class="breadcrumb--item"><a href="!#" class="breadcrumb--item-link">Link three</a></li>
                    <li class="breadcrumb--item"><a href="!#" class="breadcrumb--item-link">Link four</a></li>
                </ol>
            </nav>
        );
    }
}

class BreadcrumbRound extends Component{
    render(){
        return(
            <nav className="box" aria-label="breadcrumb">
                <ol class="breadcrumb-round m-0 p-0">
                    <li class="breadcrumb-round--item"><a href="!#" class="breadcrumb-round--item-link">Link one</a></li>
                    <li class="breadcrumb-round--item"><a href="!#" aria-current="page" class="breadcrumb-round--item-link is-active">Link two</a></li>
                    <li class="breadcrumb-round--item"><a href="!#" class="breadcrumb-round--item-link">Link three</a></li>
                    <li class="breadcrumb-round--item"><a href="!#" class="breadcrumb-round--item-link">Link four</a></li>
                </ol>
            </nav>
        );
    }
}

export { Breadcrumb, BreadcrumbRound };