import React, {PropTypes} from 'react'
import Product from '../../../common/Product'

const Cart = ({products, total}) => {
    console.log('products', products);
    const hasProducts = products && products.length > 0
    const nodes = hasProducts ? (
        products.map(product =>
            <Product
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
            />
        )
    ) : (
        <em>Please add some Ad products.</em>
    )

    return (
        <div>
            <h3>Your Cart</h3>
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
