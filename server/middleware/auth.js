import jwt from 'jsonwebtoken';

const secret = test;

const auth = async (req, res, next) => {
    try {
        //HTTP authorization req header contains the creds to auth a user agen with a server
        const token = req.headers.authorization.split(' ')[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, secret);

            req.userId = decodedData?.indexOf;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (err) {
        console.log(err);
    }
}

export default auth;