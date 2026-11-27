

const Url = require("../models/Url")
const {nanoid} = require("nanoid")


exports.uploadUrl = async(req, res, next) => {

    

        const {originalUrl, customAlias} =  req.body

        try {
            new URL(originalUrl)
            
        } catch (error) {
            
            return res.status(400).json({
                success:false,
                message:"A valid URL is required"
            })
        }



        try {

            const shortCode = customAlias ? customAlias.trim() : nanoid(7)

            const existing = await Url.findOne({shortCode})

            if(existing){
                return res.status(400).json({
                    message:"The short code Already exists"
                })
            }

            const newUrl = await Url.create({originalUrl, shortCode})


            const baseUrl = `${req.protocol}://${req.get("host")}`

            return res.status(201).json({
                shortUrl:`${baseurl}/${newUrl.shortCode}`,
                shortcode:newUrl.shortCode,
                longurl:newUrl.originalUrl
            })
            
        } catch (error) {

             console.error(error);
         return res.status(500).json({ error: 'Server error' })
            
        }




    
}