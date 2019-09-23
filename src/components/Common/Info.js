import React, {Component} from 'react';

export default class Info extends Component {
    rawMarkup() {
        let rawMarkup = this.props.info;
        return {__html: rawMarkup};
    }
    render(){
        return <div className="blog-details" dangerouslySetInnerHTML={this.rawMarkup()} />
    }
}