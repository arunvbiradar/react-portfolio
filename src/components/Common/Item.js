import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ListItem extends Component {
    render() {
        const {id, title, img, url} = this.props.item;
        let link = '';
        if (this.props.type === 'Articles'){
            link = 'post';
        } else if (this.props.type === 'Categories') {
            link ='category';
        } else{
            link ='myworks';
        }
        return (
            <li className="list-inline-item">
                <div className="card rounded-0">
                    <Link to={`/${link}/${id}`} >
                        <img src={img} alt={title} className="img-fluid" />
                    </Link>
                </div>
            </li>
        )
    }
}