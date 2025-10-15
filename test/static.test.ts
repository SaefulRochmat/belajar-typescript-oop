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
        static NAME:string = "Belajar TypeScript OOP";
        static VERSION:number = 1.0;
        static AUTHOR:string = "Saeful"
    }

    class MathUtil {
        static PI:number = 3.14;

        static circumference(radius:number):number {
            return 2 * this.PI * radius;
        }
        static area(radius:number):number {
            return this.PI * radius * radius;
        }
    }

    it('Should can access static method', function() {
        console.info(`Circumference of circle with radius 10: ${MathUtil.circumference(10)}`);
        console.info(`Area of circle with radius 10: ${MathUtil.area(10)}`);
    })

    it('Should can access static properties', function() {
        console.info(`Application Name: ${Configuration.NAME}`);
        console.info(`Application Version: ${Configuration.VERSION}`);
        console.info(`Application Author: ${Configuration.AUTHOR}`);
    })
})