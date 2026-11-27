
const app = require("./app")

const {databaseConnection} = require("./config/db")

const  {env_variables} = require("./config/env")



async function startServer() {

    try {

        await databaseConnection()

        app.listen(env_variables.port, () => {

            console.log("Server Running")
            console.log(`http://localhost:${env_variables.port}`)
        })



        
    } catch (error) {

        console.error(`Failed to start the Server:${error.message}`)
        process.exit(1)
        
    }
    
}

startServer()

