

require("dotenv").config()


const env_variables = {
    db_url:process.env.DB_URL,
    port:process.env.PORT
}


module.exports = env_variables