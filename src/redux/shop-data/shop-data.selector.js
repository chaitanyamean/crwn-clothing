import {createSelector} from 'reselect'

const selectShopData = state  => state.shop

export const selectShopDataItems = createSelector(
    [selectShopData],
    shop=> shop.shopData
)

