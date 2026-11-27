

const {uploadUrl, health} = require("../controllers/url.controller")
const express = require("express")
const router = express.Router()



router.post("/upload-url", uploadUrl)
router.get("/health", health)



module.exports = router