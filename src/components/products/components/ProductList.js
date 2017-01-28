import React, {PropTypes} from "react";
import ProductItem from './ProductItem'


// Home page component
export default class ProductList extends React.Component {
    // render
    render() {

        console.log('this', this);

        const {products} = this.props;
        if (products && !products.length) {
            return (
                <div>Loading Products</div>
            );
        }

        return (
            <div>
                {
                    products.map(product => <ProductItem key={product.id} product={product}/>)
                }
            </div>

        )

    }
}