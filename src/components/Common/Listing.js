import React from 'react';
import ListItem from './Item';

export default function Listing({listItem, type}) {
    return (
        <ul className="list-inline mb-0">
            {listItem.map(item => {
                return <ListItem key={item.id} item={item} type={type} />
            })}
        </ul>
    )
}