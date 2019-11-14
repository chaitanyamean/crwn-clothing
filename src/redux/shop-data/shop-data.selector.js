import {createSelector} from 'reselect'

const COLLECTION_ID_MAP = {
    hats:1,
    sneakers: 2,
    jackets:3,
    womens:4,
    mens: 5
}

const selectShopData = state  => state.shop

export const selectShopDataItems = createSelector(
    [selectShopData],
    shop=> shop.shopData
)


export const selectCollection = collectionUrlParam => createSelector(
    [selectShopDataItems],
    shopData => shopData.find(collection => 
        collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)

