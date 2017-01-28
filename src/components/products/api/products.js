export default class ApiProducts {
    static getAdProductsList() {
        return new Promise(resolve => {
            setTimeout(() => {
                // mock products list as if from server.
                let products = [
                    {
                        id: 1,
                        title: "Classic Ad",
                        price: 269.99
                    },
                    {
                        id: 2,
                        title: "Standout Ad",
                        price: 322.99
                    },
                    {
                        id: 3,
                        title: "Premium Ad",
                        price: 394.99
                    }

                ];
                resolve(products);
            }, 2000);
        });
    }
}
