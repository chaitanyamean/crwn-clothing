import {createSelector} from 'reselect'


const selectShopData = state  => state.shop;

export const selectShopDataItems = createSelector(
    [selectShopData],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectShopDataItems],
    collections => Object.keys(collections).map(key => collections[key])
)


export const selectCollection = collectionUrlParam => createSelector(
    [selectShopDataItems],
    collections => collections[collectionUrlParam]
)

