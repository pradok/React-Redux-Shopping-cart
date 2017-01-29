import React, {PropTypes} from 'react'

const Product = ({price, quantity, priceReduced, title}) => (
    <div>
        {title}
        : &#36;{!priceReduced ? price : (priceReduced < 0 ? price : priceReduced)} {quantity ? ` x ${quantity}` : null}
        = {priceReduced > 0 ? (quantity * priceReduced).toFixed(2) : (quantity * price).toFixed(2)}
        {priceReduced < 0 ? `${priceReduced}` : ''}
        {priceReduced < 0 ? `= $${(quantity * price).toFixed(2)-(-priceReduced)}` : ''}
    </div>
)

Product.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    priceReduced: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    title: PropTypes.string
}

export default Product
