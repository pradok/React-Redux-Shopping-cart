import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import {getTotal, getCartProducts} from '../reducers'

import Cart from '../components/cart/components/Cart'

export class CartContainer extends React.Component {

    getCustomerDiscounts(customerId) {
        this.props.dispatch({
            type: 'PRODUCT_CUSTOMER_DISCOUNTS',
            customerId: customerId
        });
    }

    componentWillMount() {
        if (this.props.customerId) {
            this.getCustomerDiscounts(this.props.customerId);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.customerId !== this.props.customerId) {
            this.getCustomerDiscounts(nextProps.customerId);
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
    total: PropTypes.string
}

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state),
    customer: state.customer || {}
})

export default connect(
    mapStateToProps
)(CartContainer)
