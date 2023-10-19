const express = require('express')
const app = express()
const port = 3000
const {engine} = require('express-handlebars')
const urls = require('./public/jsons/url.json')


app.use(express.static('public'))
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:id', (req, res) => {
  const id = req.params.id
  if (id === urls[0].id) {
    res.redirect(urls[0].orig)
  }
})


app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})