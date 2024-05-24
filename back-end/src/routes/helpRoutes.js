const express = require("express")
const router = express.Router()
const helpController = require("../controller/helpController")

router.get("/help",helpController.getAllHelp)
router.post("/help",helpController.postHelp)
router.get("/help/:id",helpController.getHelpById)
router.delete("/help/:id",helpController.deleteHelp)



module.exports = router