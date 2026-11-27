

const {uploadUrl, health, Redirect} = require("../controllers/url.controller")
const express = require("express")
const router = express.Router()



router.post("/upload-url", uploadUrl)
router.get("/health", health)
router.get("/:shortCode", Redirect)



module.exports = router