import React from 'react';

import { Route } from 'react-router-dom'
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {updateCollections} from '../../redux/shop-data/shop-data.actions'

import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {

    unSubscribeFromSnapShot = null;

    componentDidMount() {


        const {updateCollections} = this.props;

        console.log('updateCollections', updateCollections);
        

        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsToMap(snapshot)
            console.log(collectionMap);
            updateCollections(collectionMap);
        })

    }

    render() {
        const { match, collections } = this.props
        console.log(collections);
        
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => 
    dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);