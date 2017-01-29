import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {getTotal, getCartProducts} from '../reducers'

import Cart from '../components/cart/components/Cart'

export class CartContainer extends React.Component {

    componentWillMount() {
        if (this.props.customerId) {
            this.props.dispatch({
                type: 'PRODUCT_CUSTOMER_DISCOUNTS',
                customerId: this.props.customerId
            });
        }
    }

    render() {
        const {products, total, customer} = this.props;
        return (
            <Cart
                products={products}
                total={total}
                customer={customer}
            />
        );
    }
}

CartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })),
    total: PropTypes.string,
}

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state),
    customer: state.customer || {}
})

export default connect(
    mapStateToProps
)(CartContainer)
