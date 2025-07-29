import dotenv from 'dotenv'
import connectDB from './Db/index.js'
dotenv.config( {
    path: './env'
} )

connectDB()



















// import express from 'express';
// const app = express()

//     ( async () => {
//         try {
//             await mongoose.connect( `${process.env.MONGODB_URI}/${DB_Name}` )
//             app.on( "error", ( error ) => {
//                 console.log( "ERROR", error );
//                 throw error
//             } )

//             app.listen( process.env.PORT, () => {
//                 console.log( `App is listening on YOUR PORT${process.env.PORT}` )
//             } )
//         } catch ( error ) {
//             console.log( "DATABASE CONNECTION ERROR", error )
//         }
//     } )()
