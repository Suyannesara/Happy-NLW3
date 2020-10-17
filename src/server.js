// Import dependences
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

//Inicializing the express
const server = express()
server

  //Using req from body
  .use(express.urlencoded({extended: true}))
  //Using static files
  .use(express.static('public'))

  //Configurar template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //Create a route for the server
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

//Turn on the server
server.listen('5500')