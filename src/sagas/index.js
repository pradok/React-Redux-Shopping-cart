import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { productsFetchList} from "../components/products/saga/products";

// main saga generators
export function* sagas() {
    yield [
        fork(takeLatest, 'PRODUCTS_FETCH_LIST', productsFetchList),
    ];
}
