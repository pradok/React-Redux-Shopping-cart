import assert from "assert";
import products from "../../../../src/components/products/reducers/products";

describe('products reducers', () => {
    describe('PRODUCTS_LIST', () => {
        it('should return a list of ad products', () => {
            assert.deepEqual(
                products({},
                    {
                        type: 'PRODUCTS_LIST',
                        products: [
                            {
                                id: 'classic',
                                title: "Classic Ad",
                                price: 269.99
                            },
                            {
                                id: 'standout',
                                title: "Standout Ad",
                                price: 322.99
                            }
                        ],
                    }
                ).products,
                [
                    {
                        id: 'classic',
                        title: "Classic Ad",
                        price: 269.99
                    },
                    {
                        id: 'standout',
                        title: "Standout Ad",
                        price: 322.99
                    }
                ]
            );
        });
    });
});
