describe ('Operator instanceof', () => {
    class Employee{}

    class Manager{}

    const Saeful = new Employee();
    const Asep = new Manager();
    it("Should can have prblem with operator instanceof", function() {
        // ini akan menghasilkna keluaran yang type nya berupa object, tidak sesuai dengan yang diharapkan
        // Karena yang di harapan itu keluarannya berupa class Employee atau Manager
        console.info(typeof Saeful);
        console.info(typeof Asep);
    })
    
    it('should support operator instanceof', function() {
        // ini akan menghasilkan keluaran yang sesuai dengan yang diharapkan
        // Karena yang di harapan itu keluarannya berupa class Employee atau Manager
        
        expect(Saeful instanceof Employee).toBe(true);
        expect(Saeful instanceof Manager).toBe(false);
    
        expect(Asep instanceof Manager).toBe(true);
        expect(Asep instanceof Employee).toBe(false);  
    })
})