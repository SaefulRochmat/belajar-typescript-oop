/*
    Static adalah sebuah fitur yang memungkinkan kita untuk mengakses properti atau method
    tanpa harus membuat instance dari class tersebut.
    Static biasanya digunakan untuk properti atau method yang bersifat global, atau tidak tergantung
    pada instance dari class tersebut.
    Static juga bisa digunakan untuk membuat utility class, yang berisi method-method yang berguna
    namun tidak tergantung pada state dari class tersebut.
    Static bisa diakses menggunakan nama class, tanpa harus membuat instance dari class tersebut.
*/
describe("Static", () => {
    class Configuration {
    }
    Configuration.NAME = "Belajar TypeScript OOP";
    Configuration.VERSION = 1.0;
    Configuration.AUTHOR = "Saeful";
    class MathUtil {
        static circumference(radius) {
            return 2 * this.PI * radius;
        }
        static area(radius) {
            return this.PI * radius * radius;
        }
    }
    MathUtil.PI = 3.14;
    it('Should can access static method', function () {
        console.info(`Circumference of circle with radius 10: ${MathUtil.circumference(10)}`);
        console.info(`Area of circle with radius 10: ${MathUtil.area(10)}`);
    });
    it('Should can access static properties', function () {
        console.info(`Application Name: ${Configuration.NAME}`);
        console.info(`Application Version: ${Configuration.VERSION}`);
        console.info(`Application Author: ${Configuration.AUTHOR}`);
    });
});
export {};
//# sourceMappingURL=static.test.js.map