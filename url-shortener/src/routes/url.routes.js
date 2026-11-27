

const {uploadUrl} = require("../controllers/url.controller")
const express = require("express")
const router = express.Router()



router.post("/upload-url", uploadUrl)



module.exports = router