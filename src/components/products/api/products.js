export default class ApiProducts {
    static getAdProductsList() {
        return new Promise(resolve => {
            setTimeout(() => {
                // mock products list as if from server.
                let products = [
                    {
                        id: 'classic',
                        title: "Classic Ad",
                        price: 269.99
                    },
                    {
                        id: 'standout',
                        title: "Standout Ad",
                        price: 322.99
                    },
                    {
                        id: 'premium',
                        title: "Premium Ad",
                        price: 394.99
                    }

                ];
                resolve(products);
            }, 2000);
        });
    }
}
