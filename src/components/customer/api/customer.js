export default class ApiCustomers {
    static customerDiscounts(args) {
        return new Promise(resolve => {
            setTimeout(() => {
                // mock products list as if from server.
                let customerDiscounts = {
                    'unilever': {
                        'rulesDescription': [
                            'Get 3 for 2 deal on Classic Ads'
                        ],
                        'classic': {
                            'trigger': 3
                        }
                    },
                    'apple': {
                        'rulesDescription': [
                            'Standout Ad drops to $299.99 per ad'
                        ],
                        'standout': {
                            'price': 299.99
                        }
                    },
                    'nike': {
                        'rulesDescription': [
                            'Premium Ad drops to $379.99 per ad when 4 or more are purchased'
                        ],
                        'premium': {
                            'perAd': {
                                'minQty': 4,
                                'price': 379.99
                            }
                        }
                    },
                    'ford': {
                        'rulesDescription': [
                            '5 for 4 deal on Classic Ads',
                            'Standout Ad drops to $309.99 per ad',
                            'Premium Ads drop to $389.99 per ad when 3 or more are purchased'
                        ],
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
            }, 500);
        });
    }
}
