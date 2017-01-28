import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import ProductList from '../components/ProductList'

export class ProductsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onProductAddToCart = this.onProductAddToCart.bind(this);
    }

    componentWillMount() {
        // load product list when initially loaded.
        this.props.dispatch({type: 'PRODUCTS_FETCH_LIST'});
    }

    onProductAddToCart(productId) {
        console.log('onProductAddToCart addToCart', productId);
        console.log('this', this);

        this.props.dispatch({
            type: 'PRODUCT_ADD_TO_CART',
            productId: productId,
        });
    }

    render() {
        return (
            <ProductList {...this.props} addToCart={this.onProductAddToCart}/>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products || [],
    cart: state.cart || []
})

export default connect(
    mapStateToProps
)(ProductsContainer)
