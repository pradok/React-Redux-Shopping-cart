export default class ApiCustomers {
    static customerDiscounts(args) {
        return new Promise(resolve => {
            setTimeout(() => {
                // mock products list as if from server.
                let customerDiscounts = {
                    'unilever': {
                        'classic': {
                            'deal': {
                                3: 2
                            }
                        }
                    },
                    'apple': {
                        'standout': {
                            'discount': 0.0712
                        }
                    },
                    'nike': {
                        'premium': {
                            'perAd': {
                                'minQty': 4,
                                'price': 379.99
                            }
                        }
                    },
                    'ford': {
                        'classic': {
                            'deal': {
                                5: 4
                            }
                        },
                        'standout': {
                            'discount': 0.040248
                        },
                        'premium': {
                            'perAd': {
                                'minQty': 3,
                                'price': 389.99
                            }
                        }
                    }
                };
                resolve(customerDiscounts[args[0]]);
            }, 2000);
        });
    }
}
