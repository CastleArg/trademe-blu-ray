import React, { Component } from 'react';
class SearchComponent extends Component {

    render() {
        return (<div>
            <input placeholder='search' onChange={(evt) => this.props.searchInputChanged(evt.target.value)}></input>
        </div>)
    }
}
export default SearchComponent;