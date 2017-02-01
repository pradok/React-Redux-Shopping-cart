import React from 'react'
import assert from "assert"
import { shallow, render } from 'enzyme'

import ProductList from "../../../../src/components/products/components/ProductList";

describe('ProductList component', () => {
    describe('render()', () => {
        it('should render the Loading bar if products not available', () => {
            const props = {products: {products: []}};
            const wrapper = shallow(<ProductList {...props} />);
            assert.equal(wrapper.hasClass('products-loading'), true);
        });
    });
});