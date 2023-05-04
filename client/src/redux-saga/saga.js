import axios from 'axios'
import { all, call, takeEvery, put } from 'redux-saga/effects'
import {
    actiontypes,
    getallproductSuccess,
    setloadingtrue,
    setloadingfalse,
    setloginSuccess,
    getproductinfoSuccess,
    addtocartSuccess,
    getcartuserloginSuccess,
    searchproductbynameSuccess
} from './action'

const ApiGetallProduct = async () => {
    return await axios.get("http://localhost:8000/v1/product/getall")
}

const ApiGetoneProduct = async (data) => {
    return await axios.get(`http://localhost:8000/v1/product/findbyID/${data.IDproduct}`)
}

const ApiLogin = async (data) => {
    return await axios.post('http://localhost:8000/v1/auth/login', data)
}

const ApiAddtoCart = async (data) => {
    return await axios.post('http://localhost:8000/v1/cart/cart', data)
}

const ApiGetCartLogin = async (data) => {
    return await axios.get(`http://localhost:8000/v1/cart/get/${data.userId}`)
}

const ApiSearchProductName = async (data) => {
    console.log(data);
    return await axios.post(`http://localhost:8000/v1/product/findbyname`, data)
}

function* searchproductbynameReq({ payload }) {
    const callback = payload.callback
    let A = yield call(ApiSearchProductName, payload)
    yield put(searchproductbynameSuccess(A.data))
    callback()
}

function* getcartloginReq({ payload }) {
    yield put(setloadingtrue(true))
    let A = yield call(ApiGetCartLogin, payload)
    yield put(getcartuserloginSuccess(A.data[0]))
    yield put(setloadingfalse(false))
}

function* addtocartReq({ payload }) {
    const callback = payload.callback
    yield put(setloadingtrue(true))
    let A = yield call(ApiAddtoCart, payload)
    yield put(addtocartSuccess(A.data[0]))
    yield put(setloadingfalse(false))
    callback()
}

function* getproductinfoReq({ payload }) {
    yield put(setloadingtrue(true))
    let A = yield call(ApiGetoneProduct, payload)
    yield put(getproductinfoSuccess(A.data[0]))
    yield put(setloadingfalse(false))
}

function* getallproductReq() {
    yield put(setloadingtrue(true))
    let A = yield call(ApiGetallProduct)
    yield put(getallproductSuccess(A.data))
    yield put(setloadingfalse(false))
}

function* loginReq({ payload }) {
    yield put(setloadingtrue(true))
    let A = yield call(ApiLogin, payload)
    yield put(setloginSuccess(A.data))
    yield put(setloadingfalse(false))
}


function* mysaga() {
    yield all([
        yield takeEvery(actiontypes.GET_ALL_PRODUCT_RQ, getallproductReq),
        yield takeEvery(actiontypes.SET_LOGIN_RQ, loginReq),
        yield takeEvery(actiontypes.GET_PRODUCT_INFO_RQ, getproductinfoReq),
        yield takeEvery(actiontypes.ADD_TO_CART_RQ, addtocartReq),
        yield takeEvery(actiontypes.GET_CART_USERLOGIN_RQ, getcartloginReq),
        yield takeEvery(actiontypes.SEARCH_PRODUCT_BY_NAME_RQ, searchproductbynameReq)
    ])
}

export default mysaga
