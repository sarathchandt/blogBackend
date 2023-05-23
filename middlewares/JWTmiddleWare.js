import jwt from 'jsonwebtoken'



    export const createJwt = (details) => {
        try{
            return  jwt.sign(details, process.env.JWT_SECRET, { expiresIn: '60d'  });
        }catch(err){
            return false
        }
    }




export function verifyToken(req, res, next) {
    try{

        let token = req?.headers?.authorization?.split(' ')[1]
        if (token == 'null' ) {
            res.status(400).json({ isLogin: false })
            
        } else {
            jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ isLogin: false })
                } else {
                    console.log(data);
                    res.locals.userId = data?.email
                    next()
                }
            })
        }
    }catch(err){
        res.status(500).json({something_went_wrong:true})
    }




}
