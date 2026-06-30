const checkRole = (role)=>{
return async (req,res,next) => {
    if(role.includes(req.user.role)){
        console.log(req.user.role)
        next()
    }else{
        res.status(403).json({
            message : `this resource is not avaialable for ${req.user.role}`
        })
    }
}}

export default checkRole