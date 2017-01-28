import React, { PropTypes } from 'react'

const ProductItem = ({ product }) => (
  <div style={{ marginBottom: 20 }}>
    <div>{product.title}, {product.price}</div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default ProductItem
