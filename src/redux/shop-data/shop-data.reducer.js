import SHOP_DATA from './shop-data';
import shopDataTypes from './shop-data.types';

const INITIAL_STATE = {

  collections: SHOP_DATA
      
}

const shopData = (state=INITIAL_STATE, action) => {

    switch (action.type){

        case shopDataTypes.UPDATE_SHOP_COLLECTION:
          return {
            ...state,
            collections:action.payload
          }

        default:
            return state;
    }
}

export default shopData;