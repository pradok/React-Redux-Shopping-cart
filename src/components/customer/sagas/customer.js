import { call, put } from "redux-saga/effects";
import ApiCustomers from "../api/customer";

export function* fetchCustomerDiscounts(action) {
    const discounts = yield call(ApiCustomers.customerDiscounts, [action.customerId]);

    // put the customer discounts in state
    yield put({
        type: 'CUSTOMER_DISCOUNTS',
        customerDiscounts: discounts,
    });
}