import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect'
import { selectShopDataItems } from '../../redux/shop-data/shop-data.selector';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ collections }) => (
    <div className="shop-page">
       <CollectionsOverview />
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectShopDataItems
})

export default connect(mapStateToProps)(ShopPage);