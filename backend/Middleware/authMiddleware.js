import jwt from 'jsonwebtoken';

const secret = 'test';

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      const decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    return res.status(401).json({ message: 'Authorization header missing or malformed' });
  }
};

export default authenticateToken;
