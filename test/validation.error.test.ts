describe("Error handling", () => {
    class ValidationError extends Error {
        constructor(public message: string) {
            super(message);
        }
    }

    function validatePasswod(password: string, pass: string): void {
        if (password != pass) {
            throw new ValidationError("Password you entered is not valid");
        }

        return;
    }

    it('Should can throw validation error', function() {
        try {
            validatePasswod("saeful", "saeful");
        } catch (error) {
            if (error instanceof ValidationError) {
                console.info(`Validation Error: ${error.message}`);
            } else {
                console.error(`Unknown Error: ${error}`);
            }
        }
    })
})