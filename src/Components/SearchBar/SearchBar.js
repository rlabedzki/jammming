import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
        this.search = this.search.bind(this);
    }
    
    search(){
        this.props.onSearch(this.state.search);
    }

    render(){
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}