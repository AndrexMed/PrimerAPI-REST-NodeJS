//Dependencias
const express = require("express")
const morgan = require("morgan")

const app = express()

//settings
app.set("port", process.env.PORT || 3000)

//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use("/api/test",require("./rutas/test.js"))
app.use("/api/movies",require("./rutas/movies.js"))
app.use("/api/users",require("./rutas/users.js"))


//Startin the server
app.listen(app.get("port"), () => {
    console.log(`Server conectado en el puerto ${app.get("port")}`)
})