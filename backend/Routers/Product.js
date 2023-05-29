import express from 'express';
import authenticateToken from '../Middleware/authMiddleware.js';
import { createProduct, deleteProduct, getProducts, updateProduct, getProductbyId } from '../Controllers/Product.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });
  

const router = express.Router();

router.get('/', getProducts);
router.get('/:id',getProductbyId);
router.post('/',authenticateToken,upload.single('image'), createProduct);
router.patch('/:id',authenticateToken, updateProduct);
router.delete('/:id',authenticateToken, deleteProduct);



export default router;