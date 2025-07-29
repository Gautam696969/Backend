const asyncHandler = ( reqHandler ) => {
    ( res, req, next ) => {
        Promise.resolve( reqHandler( res, req, next ) )
    }
}
export { asyncHandler }


// const asyncHandler = ( func ) => async ( req, res, next ) => {
//     try {
//         await fn (res, req , next)
//     } catch ( error ) {
//         res.status( err.code || 500 ).json( {
//             success: false,
//             message: error.message
//         } )
//     }
// }
// export { asyncHandler }
