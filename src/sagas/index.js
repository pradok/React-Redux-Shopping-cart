import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { productsFetchList} from "../components/products/sagas/products";
import { addToCart} from "../components/cart/sagas/cart";
import { fetchCustomerDiscounts} from "../components/customer/sagas/customer";

// main saga generators
export function* sagas() {
    yield [
        fork(takeLatest, 'PRODUCTS_FETCH_LIST', productsFetchList),
        fork(takeLatest, 'PRODUCT_ADD_TO_CART', addToCart),
        fork(takeLatest, 'PRODUCT_CUSTOMER_DISCOUNTS', fetchCustomerDiscounts),
    ];
}
