const express = require("express");
const router = express.Router();
const yatesController = require("../controllers/Yates.controllers");

router.post("/", yatesController.crearYate);
router.get("/", yatesController.obtenerYate);
router.get("/:id", yatesController.obtenerYatePorId);
router.put("/:id", yatesController.actualizaryate);
router.delete("/:id", yatesController.eliminaryates);

module.exports = router;