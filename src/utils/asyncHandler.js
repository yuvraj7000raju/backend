const asyncHandler = (requestHandler)=>
    async(req,res,next)=>{
        try{
            await requestHandler(req,res,next)
        }catch(error){
            res.status(500).json({
                success : false,
                message : error.message
            })
        }
    }





// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

export {asyncHandler}