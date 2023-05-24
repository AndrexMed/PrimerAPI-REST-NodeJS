const { Router } = require("express")
const router = Router()


router.get('/', async (req, res) => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respuesta.json()
    res.json(data)
})

module.exports = router