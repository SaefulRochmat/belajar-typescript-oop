describe ('Class', () => {
    class Customer {
        constructor() {
            console.info("Create new customer");
        }
    }

    class Order {

    }
    
    it('Should can create class', function() {

        const customer: Customer = new Customer();
        const order: Order = new Order();
    })

    it('Should can create constructor', function() {

        new Customer();
        
    })
})