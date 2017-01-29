import React, {PropTypes} from 'react'

const Product = ({price, quantity, priceReduced, title}) => (
    <div>
        {title} - &#36;{!priceReduced ? price : null}{priceReduced ? priceReduced : null} {quantity ? ` x ${quantity}` : null}
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
