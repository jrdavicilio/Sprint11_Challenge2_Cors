const express = require ('express')
const axios = require ('axios')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())

app.get('/characters/:name', async (req, res) => {
    const name = req.params.name
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`
    try {
        const response = await axios.get(url)
        const character = response.data.results[0]
        
        const {name, status, species, gender, origin, image} = character

        res.json({name, status, species, gender, origin, image})

    } catch (ERROR) {
        res.status(404).json({error: 'Personaje no encontrado'})
    }
})

app.listen(PORT, () => {
    console.log('express está escuchando en el puerto http://localhost:3000')
})