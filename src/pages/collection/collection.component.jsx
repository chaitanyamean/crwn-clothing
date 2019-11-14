import React from 'react';
import {connect} from 'react-redux';

import './collection.styles.scss';

import {selectCollection} from '../../redux/shop-data/shop-data.selector';


const CollectionPage = ({collection}) => {
console.log(collection);

    return (
        <div>
            <h1>This is {collection.title} page</h1>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);