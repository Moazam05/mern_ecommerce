import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';

import Product from '../models/productModels.js';

// @des     Fetch all products
// @routes  Get /api/products
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @des     Fetch single product
// @routes  Get /api/products/:id
// access   Public
// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ message: 'Product not found' });
//     }
//   })
// );

router.get('/:id', async (req, res, next) => {
  try {
    // query and other code here
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    }
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        errors: [
          {
            msg: 'Product not Found',
            status: '404',
          },
        ],
      });
    }
    next(err);
  }
});

export default router;
