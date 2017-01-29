export default class ApiCustomers {
    static customerDiscounts(args) {
        return new Promise(resolve => {
            setTimeout(() => {
                // mock products list as if from server.
                let customerDiscounts = {
                    'unilever': {
                        'classic': {
                            'trigger': 3
                        }
                    },
                    'apple': {
                        'standout': {
                            'price': 299.99
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
                            'trigger': 5
                        },
                        'standout': {
                            'price': 309.99
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
