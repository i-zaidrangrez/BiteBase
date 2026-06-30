const checkRole = async (req,res,next) => {
    const role = req.user.role
    res.send(role)
}

export default checkRole