describe ('Class Parameter Properties', () => {
    class Person {
        // Biasanya kita harus mendeklarasikan property terlebih dahulu baru di constructor seperti:
        // name: string;
        // age: number;
        // constructor(name: string, age: number) {
        //     this.name = name;
        //     this.age = age;
        // }

        // Dengan parameter properties, kita bisa mendeklarasikan sekaligus di constructor
        constructor(public name: string, public age: number) {
        }
    }
    it('Should can use parameter properties', function() {
        const person: Person = new Person("Saeful", 20);
        console.info(`Person name: ${person.name}, age: ${person.age}`);
    })
});