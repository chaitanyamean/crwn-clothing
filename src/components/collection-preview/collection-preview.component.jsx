import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (

    <div className="collection-preview">
        <h1>{title}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx<4)
             .map(({id, ...otherProps}) => (
                // <div key={item.id}>{item.name}</div>
                <CollectionItem key={id} {...otherProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview