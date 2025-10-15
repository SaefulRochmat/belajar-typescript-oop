/* 
    Abstract Class
    - Abstract class adalah class yang tidak bisa di instansiasi, artinya kita tidak bisa membuat object dari class tersebut
    - Abstract class biasanya digunakan sebagai class induk, dimana class turunan harus mengimplementasikan semua abstract method yang ada di class induk
    - Abstract class bisa memiliki properti dan method biasa, namun juga bisa memiliki abstract method
    - Abstract method adalah method yang tidak memiliki implementasi, sehingga harus di implementasikan di class turunan
*/

describe ("Abstract Class", () => {
    abstract class Customer {
        readonly id: number;
        abstract name: string;

        constructor(id: number) {
            this.id = id;
        }

        hello() {
            console.info(`Hello, my name is ${this.name}`);
        }

        abstract sayHello(name: string): void;
    }

    class PremiumCustomer extends Customer {
        name: string;

        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}, I am a premium customer`);
        }
    }

    it('Should support abstract class', function() {
        const customer1: PremiumCustomer = new PremiumCustomer(1, "Saeful");
        customer1.hello();
        customer1.sayHello("Asep");
    })
})