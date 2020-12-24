import React, { Component } from 'react';
import Header from '../header';
import SearchComponent from '../search';

class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <SearchComponent />
            </div>
        );
    }
}

export default Index;
