import { call, put } from "redux-saga/effects";
import ApiProducts from "../api/products";

export function* productsFetchList(action) {
    // api call for products list.
    const products = yield call(ApiProducts.getAdProductsList);

    // put the products list in state
    yield put({
        type: 'PRODUCTS_LIST',
        products: products,
    });
}