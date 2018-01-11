const express = require('express')
const { getPetsAndSpecies, updatePetName } = require('./db/db.js')
const bodyParser = require('body-parser');


const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  getPetsAndSpecies()
    .then((pets) => {
      res.render(
        'pets',
        { pets }
      )
    })
    .catch(console.error)
})


app.put('/pets/:petID/update_name', (req, res) => {
  const { petID } = req.params;
  const { newName } = req.body;

  updatePetName(petID, newName)
    .then((pet) => {
      res.json(pet)
    })
    .catch(console.error)
})


app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)
