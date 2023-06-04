const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

// publication routes
router.post("/admin/publication", adminController.addPublication);
router.put(
  "/admin/publication/:publicationId",
  adminController.updatePublication
);
router.delete(
  "/admin/publication/:publicationId",
  adminController.deletePublication
);

// category admin routes
router.post("/admin/category", adminController.addCategory);
router.put("/admin/category/:categoryId", adminController.updateCategory);
router.delete("/admin/category/:categoryId", adminController.deleteCategory);

// tag routes
router.post("/admin/tag", adminController.addTag);
router.put("/admin/tag/:tagId", adminController.updateTag);
router.delete("/admin/tag/:tagId", adminController.deleteTag);

module.exports = router;
