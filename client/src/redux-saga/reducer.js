import { actiontypes } from './action'

const init = {
    listAllProduct: [],
    loading: false,
    dataLogin: {},
    productInfo: {},
    newCart: [],
    dataProductSearch: []
}

const myReducer = (state = init, action) => {
    switch (action.type) {
        case actiontypes.SEARCH_PRODUCT_BY_NAME_SUCCESS:
            return {
                ...state, dataProductSearch: action.payload
            };

        case actiontypes.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state, listAllProduct: action.payload
            };

        case actiontypes.SET_LOADING_FALSE:
            return {
                ...state, loading: action.payload
            };

        case actiontypes.SET_LOADING_TRUE:
            return {
                ...state, loading: action.payload
            };

        case actiontypes.SET_LOGIN_SUCCESS:
            return {
                ...state, dataLogin: action.payload
            };

        case actiontypes.GET_PRODUCT_INFO_SUCCESS:
            return {
                ...state, productInfo: action.payload
            };

        case actiontypes.ADD_TO_CART_SUCCESS:
            return {
                ...state, newCart: action.payload
            };

        case actiontypes.GET_CART_USERLOGIN_SUCCRSS:
            return {
                ...state, newCart: action.payload
            };


        default:
            return state;
    }
}

export default myReducer