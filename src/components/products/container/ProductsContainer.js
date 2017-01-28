import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import ProductList from '../components/ProductList'

export class ProductsContainer extends React.Component {

    componentWillMount() {
        // load product list when initially loaded.
        this.props.dispatch({type: 'PRODUCTS_FETCH_LIST'});
    }

    render() {
        return (
            <ProductList {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    products: state.products || []
})

export default connect(
    mapStateToProps
)(ProductsContainer)
