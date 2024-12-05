const JWT = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        JWT.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    success:false,
                    message: 'Auth Failed'
                })
            }else{
                req.body.userId = decode.id;
                next();
            }
        })
    }catch(error) {
        console.log(error)
        return res.status(401).send({
            success:false,
            message: 'Auth Failed'
        })
    }
}