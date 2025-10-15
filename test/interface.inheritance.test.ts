describe('Interface Inheritance', () => {
    interface hasName {
        name: string;
    }

    interface canSayHello {
        sayHello(name:string): void;
    }

    class Person implements hasName, canSayHello {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('Should can use interface inheritance', function() {
        const person: Person = new Person("Saeful");
        person.sayHello("Asep");
    })
})