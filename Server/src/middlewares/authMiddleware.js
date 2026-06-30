import jwt from 'jsonwebtoken'

export default async function authMiddleware(req,res,next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        // console.log(token)
        if(!token){
            return res.json({Message  : "You need to login first"})
        }
        const decoded = jwt.verify(token , process.env.JWT_ACCESS_SECRET)
        console.log(decoded)
        // req.token = token
        // console.log(req.token)
        req.user = decoded
        next()
    } catch (error) {
        console.log(error)
    }
}

