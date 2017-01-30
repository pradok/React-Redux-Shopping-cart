import assert from "assert";
import cart from "../../../../src/components/cart/reducers/cart";

describe('cart reducers', () => {
    describe('ADD_TO_CART', () => {
        const initialState = {
            addedIds: [],
            quantityById: {}
        }

        it('should provide the initial state', () => {
            assert.deepEqual(
                cart({},
                    {}
                ),
                initialState
            );
        })

        it('should perform ADD_TO_CART action', () => {
            assert.deepEqual(
                cart(initialState,
                    {type: 'ADD_TO_CART', productId: 'classic'}
                ),
                {
                    addedIds: ['classic'],
                    quantityById: {'classic': 1}
                }
            );
        })

        describe('when product is already in cart', () => {
            it('should handle ADD_TO_CART action', () => {
                const state = {
                    addedIds: ['classic', 'standout'],
                    quantityById: {'classic': 1, 'standout': 1}
                }

                assert.deepEqual(
                    cart(state,
                        {type: 'ADD_TO_CART', productId: 'standout'}
                    ),
                    {
                        addedIds: ['classic', 'standout'],
                        quantityById: {'classic': 1, 'standout': 2}
                    }
                );

            })
        })

    });
});
