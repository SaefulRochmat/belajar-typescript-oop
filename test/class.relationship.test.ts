describe('Class Relationship', () => {
    class Person {
        constructor(public name: string) {
        }
    }

    class Costumer {
        constructor(public person: Person) {
        }
    }

    it('Should can create relationship between class', function() {
        const person =  new Person("Saeful");
        console.info(`Person Name: ${person.name}`);
    })
})