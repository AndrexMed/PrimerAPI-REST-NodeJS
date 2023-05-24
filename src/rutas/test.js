const { Router } = require("express")
const router = Router()

router.get('/', (req, res) => {
    res.json({"name": "Gio Alzate", "age": 27})
})

module.exports = router;