class ApiError extends Error {
    constructor(
        Statuscode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ) {
        super( message );
        this.Statuscode = Statuscode;
        this.data = null;
        this.message = message;
        this.success = false;  
        this.error = error;

        if ( stack ) {
            this.stack = stack;
        } else {
            Error.captureStackTrace( this, this.constructor );
        }
    }
}

export { ApiError };
