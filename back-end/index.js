const express = require("express")
const app = express()
require("./src/config/db")
const routes = require("./src/routes/helpRoutes")
const bodyParser = require('body-parser')
const cors = require('cors')

app.listen(5000, () => {
	console.log("Server has started!")
})

app.use(cors())
app.use(bodyParser.json())
app.use("/api", routes)