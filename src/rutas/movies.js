const { Router } = require("express")
const router = Router()
const _ = require("underscore") // Importamos la libreria para arrays...Nom variable = _

const movies = require("../example.json") // Asignamos los datos del json al array "movies"...

//Metodo para Leer los datos...
router.get('/', (req, res) => {
    res.json(movies)
})

//Metodo para Crear un nuevo dato...
router.post('/', (req, res) => {
    const { title, director, year } = req.body
    const id = movies.length + 1

    if(id && title && director && year){    
        const newMovie = {id, ...req.body}
        console.log("Pelicula ingresada: ",newMovie)
        movies.push(newMovie)
        res.json(movies)
        console.log("Se inserto con exito!")
    }else{
        // res.send("No se Guardo, Faltan Datos!!")
        res.status(500).json({ error: "Campos incompletos!" });
    }
})

//Metodo para Actualizar los datos
router.put("/:idEntrante", (req, res) => {
    const { idEntrante } = req.params;
    const { title, director, year } = req.body;
    if (idEntrante && title && director && year) {
      _.each(movies, (movie, i) => {
        if (movie.id === idEntrante) {
          movie.title = title;
          movie.director = director;
          movie.year = year;
        }
      });
      res.json(movies);
      console.log("Actulizacion exitosa!")
    } else {
      res.status(500).json({ error: "There was an error." });
    }
  });

//Metodo para Eliminar un dato especificando como parametro el id...
router.delete('/:id', (req, res) => { //Los dos puntos Significa: parametro N
    // console.log(req.params)//Parametro entrante === id que indicamos en el "parametro"
    const { id } = req.params
    _.each(movies, (movie, index) => {
if (movie.id === id) {
    movies.splice(index, 1)
}
    })
    res.send(movies)
    console.log("Se elimino elemento con id: ", id)
})

module.exports = router;