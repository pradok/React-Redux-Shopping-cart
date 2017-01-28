import React, {PropTypes} from 'react'

const ProductItem = ({product, onClickAddToCart}) => (
    <div style={{marginBottom: 20}}>
        <div>{product.title}, {product.price}</div>
        <button onClick={onClickAddToCart}>
            {'Add to cart'}
        </button>
    </div>
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    onClickAddToCart: PropTypes.func.isRequired
}

export default ProductItem
