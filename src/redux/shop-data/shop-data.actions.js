import shopDataTypes from './shop-data.types';


export const updateCollections = item => ({
    type: shopDataTypes.UPDATE_SHOP_COLLECTION,
    payload: item
});