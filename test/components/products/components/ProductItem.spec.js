import React from 'react'
import assert from "assert"
import {shallow, render} from 'enzyme'

import ProductItem from "../../../../src/components/products/components/ProductItem"

let productProps;

describe('ProductItem component', () => {
    beforeEach(() => {
        productProps = {
            product: {
                title: 'Classic Ad',
                price: 269.99,
            },
            onClickAddToCart: () => {
            }
        }
    })
    describe('render()', () => {
        it('should render the product', () => {
            const wrapper = shallow(<ProductItem {...productProps} />);
            assert.deepEqual(wrapper.instance().props.product, {title: 'Classic Ad', price: 269.99});
        });
    });
});