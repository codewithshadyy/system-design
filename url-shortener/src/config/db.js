

const mongoose = require("mongoose")
const {env_variables} = require("./env")


exports.databaseConnection = async () => {

    try {
        
        const conn = await mongoose.connect(env_variables.db_url)
        console.log(`
            Database connected\n
        
            `)
        

    } catch (error) {

        console.error(`Error connecting to MongoDB:${error.message}`)
        process.exit(1)
        
    }
    
}