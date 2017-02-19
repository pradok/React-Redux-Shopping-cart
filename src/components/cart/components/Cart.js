import React, {PropTypes} from 'react'
import Product from '../../../common/Product'

const Cart = ({products, total, customer}) => {
    const hasProducts = products && products.length > 0
    const nodes = hasProducts ? (
        products.map(product =>
            <Product
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                priceReduced={product.priceReduced}
                key={product.id}
            />
        )
    ) : (
        <em>Please add some Ad products.</em>
    )

    const rulesDescription = customer.discounts.rulesDescription && customer.discounts.rulesDescription.length ? (customer.discounts.rulesDescription.map((rule, index) => <li key={index}>{rule}</li>)) : '';


    return (
        <div>
            <h3>Your Cart</h3>
            <ul>{rulesDescription}</ul>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
        </div>
    )
}

Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.string
}

export default Cart
