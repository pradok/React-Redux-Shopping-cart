import React, {PropTypes} from "react";

import styles from './productList.scss'
import ProductItem from './ProductItem'

export default class ProductList extends React.Component {
    render() {

        const {products} = this.props.products;
        if (products && !products.length) {
            return (
                <div className={`products-loading ${styles.productsLoading}`}>Loading Products</div>
            );
        }

        return (
            <div>
                <h2>Ad packages</h2>
                {
                    products.map(product =>
                        <ProductItem key={product.id}
                                     product={product}
                                     onClickAddToCart={() => this.props.addToCart(product.id)}

                        />)
                }
            </div>

        )

    }
}