

const Url = require("../models/Url")
const {nanoid} = require("nanoid")








exports.health = async(req, res) => {

    try {

        return res.status(200).json({

            success:true,
            message:"Server is up and running"
        })
        
    } catch (error) {

        return res.status(500).json({
            succes:false,
            message:"Server error",
            error:error.message
        })
        
    }
}


exports.uploadUrl = async(req, res, next) => {

    

        const {originalURL, customAlias} =  req.body

        try {
            new URL(originalURL)
            console.log(originalURL)
            
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

            const newUrl = await Url.create({originalURL, shortCode})


            const baseUrl = `${req.protocol}://${req.get("host")}/urls`

            return res.status(201).json({
                shortUrl:`${baseUrl}/${newUrl.shortCode}`,
                shortcode:newUrl.shortCode,
                longurl:newUrl.originalURL
            })
            
        } catch (error) {

             console.error(error);
         return res.status(500).json({ error: 'Server error' })
            
        }




    
}


exports.Redirect = async(req, res) => {


    try {


        const urlRecord = await Url.findOneAndUpdate(
           {shortCode:req.params.shortCode},
           {$inc:{clicks:1}},
           {new:true}
        )


        if(!urlRecord){
             return res.status(404).json({ error: 'Short URL not found' })
        }

        return res.redirect(302, urlRecord.originalURL)
        
    } catch (error) {

        return res.status(500).json({
            sucess:false,
            message:"Server error",
            error:error.message
        })
        
    }
}