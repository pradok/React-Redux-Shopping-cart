import { call, put } from "redux-saga/effects";
import assert from "assert";
import { addToCart } from "../../../../src/components/cart/sagas/cart";

describe('cart saga', () => {
    describe('addToCart()', () => {
        const action = {
            productId: 'classic',
        };
        const generator = addToCart(action);

        it('should return the ADD_TO_CART action', () => {
            assert.deepEqual(generator.next().value, put({type: 'ADD_TO_CART', productId: action.productId}));
        });

        it('should be finished', () => {
            assert.equal(generator.next().done, true);
        });
    });

});