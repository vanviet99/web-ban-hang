

 export const actiontypes = {
    GET_ALL_PRODUCT_RQ : 'GET_ALL_PRODUCT__RQ',
    GET_ALL_PRODUCT_SUCCESS: 'GET_ALL_PRODUCT_SUCCESS',
    GET_PRODUCT_INFO_RQ: 'GET_PRODUCT_INFO',
    GET_PRODUCT_INFO_SUCCESS: 'GET_PRODUCT_INFO_SUCCESS',
    GET_CART_USERLOGIN_RQ: 'GET_CART_USERLOGIN_RQ',
    GET_CART_USERLOGIN_SUCCRSS: 'GET_CART_USERLOGIN_SUCCRSS' ,

    SEARCH_PRODUCT_BY_NAME_RQ: 'SEARCH_PRODUCT_BY_NAME_RQ',
    SEARCH_PRODUCT_BY_NAME_SUCCESS: 'SEARCH_PRODUCT_BY_NAME_SUCCESS',

    ADD_TO_CART_RQ: 'ADD_TO_CART_RQ',
    ADD_TO_CART_SUCCESS: 'ADD_TO_CART_SUCCESS',

    SET_LOADING_FALSE:  "SET_LOADING_FALSE",
    SET_LOADING_TRUE: 'SET_LOADING_TRUE',
    SET_LOGIN_RQ: 'SET_LOGIN_RQ',
    SET_LOGIN_SUCCESS:  'SET_LOGIN_SUCCESS',

    DELETE_ITEM_CART_RQ: 'DELETE_ITEM_CART_RQ',
    DELETE_ITEM_CART_SUCCESS: 'DELETE_ITEM_CART_SUCCESS' 

}

export function searchproductbynameRq (data){
    return {
        type: actiontypes.SEARCH_PRODUCT_BY_NAME_RQ,
        payload: data
    }
}

export function searchproductbynameSuccess (data){
    return {
        type: actiontypes.SEARCH_PRODUCT_BY_NAME_SUCCESS,
        payload: data
    }
}

export function deleteitemcartRq (data){
    return {
        type: actiontypes.DELETE_ITEM_CART_RQ,
        payload: data
    }
}

export function deleteitemcartSuccrss (data){
    return {
        type: actiontypes.DELETE_ITEM_CART_SUCCESS,
        payload: data
    }
}

export function getcartuserloginRq (data){
    return {
        type: actiontypes.GET_CART_USERLOGIN_RQ,
        payload: data
    }
}

export function getcartuserloginSuccess (data){
    return {
        type: actiontypes.GET_CART_USERLOGIN_SUCCRSS,
        payload: data
    }
}

export function getproductinfoRq (data){
    return {
        type: actiontypes.GET_PRODUCT_INFO_RQ,
        payload: data
    }
}

export function addtocartRq (data){
    return {
        type: actiontypes.ADD_TO_CART_RQ,
        payload: data
    }
}


export function addtocartSuccess (data){
    return {
        type: actiontypes.ADD_TO_CART_SUCCESS,
        payload: data
    }
}

export function getproductinfoSuccess (data){
    return {
        type: actiontypes.GET_PRODUCT_INFO_SUCCESS,
        payload: data
    }
}

export function setloginRq (data){
    return {
        type: actiontypes.SET_LOGIN_RQ,
        payload: data
    }
}

export function setloginSuccess (data){
    return {
        type: actiontypes.SET_LOGIN_SUCCESS,
        payload: data
    }
}

export function setloadingfalse (data){
    return {
        type: actiontypes.SET_LOADING_FALSE,
        payload: data
    }
}

export function setloadingtrue (data){
    return {
        type: actiontypes.SET_LOADING_TRUE,
        payload: data
    }
}

export function getallproductRq (data){
    return{
        type: actiontypes.GET_ALL_PRODUCT_RQ,
        payload: data
    }
}

export function getallproductSuccess (data){
    return{
        type:actiontypes.GET_ALL_PRODUCT_SUCCESS,
        payload: data
    }
}