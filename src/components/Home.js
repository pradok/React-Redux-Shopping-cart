import React from "react";

import styles from '../stylesheets/main.scss';

import ProductsContainer from "./products/container/ProductsContainer";
import CartContainer from "../containers/CartContainer";

export default class Home extends React.Component {
    render() {
        console.log('Home this.props', this.props);
        return (
            <div className={styles.pageHome}>
                <div className={`col-1`}>
                    <ProductsContainer/>
                </div>
                <div className={`col-2`}>
                    <CartContainer customerId={this.props.params.customerId}/>
                </div>
            </div>
        );
    }
}
