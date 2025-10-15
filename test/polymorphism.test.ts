// Polymorphism merupakan kemampuan sebuah object untuk memiliki banyak bentuk
// Polymorphism biasanya terjadi pada saat kita melakukan pewarisan class (Inheritance)
// Dimana sebuah class anak bisa memiliki banyak bentuk dari class induk nya

describe ('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {}
    }

    class Manager extends Employee {

    }

    class VicePresident extends Employee {

    }

    // contoh fungsi yang menerima parameter dengan tipe Employee
    // Dimana dengan polymorphism, kita bisa mengirimkan object dari class Employee, Manager, VicePresident
    // karena ketiga class tersebut adalah turunan dari class Employee

    //update: menambahkan typecasting dan instanceof, agar lebih spesifik dan aman
    // agar tidak terjadi error saat mengakses properti atau method yang tidak ada di class induk
    function sayHello(employee: Employee): void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello, Vice President ${vp.name}`);
        }else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello, Manager ${manager.name}`);
        } else {
            console.info(`Hello, Employee ${employee.name}`);
        }

        // namun perlu diingat, saat melakukan typecasting, kita harus yakin bahwa object tersebut benar-benar dari class yang kita casting
        // jika tidak, maka akan terjadi error saat runtime, 
        // selain itu juga untuk urutaan nya pastikan posisi child yang paling bawah dilakukan pengecekan di awal agar tidak terjadi kesalahan konversi
        // contohnya, jika posisi VicePresident diatas Manager, maka saat kita mengirimkan object dari class VicePresident
        // maka akan terdeteksi sebagai Manager, karena Manager adalah induk dari VicePresident
        // sehingga saat kita melakukan konversi ke Manager, maka akan berhasil, namun saat kita mengakses properti atau method yang ada di VicePresident
        // maka akan terjadi error, karena object tersebut sebenarnya adalah VicePresident, bukan Manager
    }

    it('Should can use polymorphism', function() {
        // Dengan polymorphism, kita bisa membuat sebuah variable dengan tipe class induk
        // Namun object yang kita masukkan bisa dari class anak nya

        // ini adalah induk class Employee
        let employee: Employee = new Employee("Saeful");
        console.info(employee);

        // ini adalah class anak Manager yang merupakan turunan dari Employee
        employee = new Manager("Rohmat");
        console.info(employee);

        // ini adalah class anak VicePresident yang merupakan turunan dari Employee, 
        // tapi extends nya dari Manager
        employee = new VicePresident("Saeful");
        console.info(employee);
    })

    it('Should can use polymorphism with function', function() {
        sayHello(new Employee("Saeful"));
        sayHello(new Manager("Rohmat"));
        sayHello(new VicePresident("Asep"));
    })
})