import { call, put } from "redux-saga/effects";
import assert from "assert";
import { productsFetchList } from "../../../../src/components/products/sagas/products";
import ApiProducts from "../../../../src/components/products/api/products";

describe('products saga', () => {
    describe('productsFetchList()', () => {
        const generator = productsFetchList();

        it('should return the ApiProducts.getAdProductsList call', () => {
            assert.deepEqual(generator.next().value, call(ApiProducts.getAdProductsList));
        });

        it('should return the PRODUCTS_LIST action', () => {
            assert.deepEqual(generator.next().value, put({type: 'PRODUCTS_LIST', products: undefined}));
        });

        it('should be finished', () => {
            assert.equal(generator.next().done, true);
        });
    });

});