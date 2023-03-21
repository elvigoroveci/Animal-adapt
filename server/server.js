const express = require('express');
const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./scratch')
const initial_pets = require('./initialData/pets');
const initial_categories = require('./initialData/categories');
const LS = require('./helpers/localStorage');
const categories = require('./initialData/categories');

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = 5000;

// this is important to disable cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let pets = LS.all('pets');

console.log(`produktet ne local storage ne momentin qe serveri ndizet: ${pets.length}`)

if (pets.length === 0) {
  LS.addALL('pets', initial_pets);
}

if (categories.length === 0) {
    LS.addALL('categories', initial_categories);
}

app.get('/api/pets', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.all('pets')
  })
})

app.get('/api/pets/:petsId', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.find('pets', req.params.petsId)
  })
})

app.post('/api/pets', (req, res) => {
  const created_product = LS.create('pets', req.body);
  console.log(req.body);
  res.json({
    "status": "success",
    "data": created_product
  })
})

app.get('/api/categories', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.all('categories')
  })
})

app.post('/api/categories', (req, res) => {
  const created = LS.create('categories', req.body);
  res.json({
    "status": "success",
    "data": created
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})