import React, { Component } from 'react';
import Header from '../header';
import DetailsComponent from '../details';

class Details extends Component {
    render () {
        const { params: { id }} = this.props.match;
        return (
            <div>
                <Header />
                <DetailsComponent id={id} />
            </div>
        );
    }
}

export default Details;
