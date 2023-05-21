const express = require('express')

const router = express.Router()

const adminController = require('../controllers/admin');
// publication routes
router.post('/admin/publication', adminController.addPublication);

// category routes
router.post('/admin/category', adminController.addCategory);
router.get('/admin/category', adminController.getCategories);
router.get('/admin/category/:categoryId', adminController.getCategory);
router.put('/admin/category/:categoryId', adminController.updateCategory);
router.delete('/admin/category/:categoryId', adminController.deleteCategory);


module.exports = router;
