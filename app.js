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

app.get('/shorten', (req,res) => {
  const inputUrl = req.query.url
  if (inputUrl && inputUrl.length > 0) {
    res.render('short', {inputUrl})
  }
})


// Redirection of shortened urls
app.get('/:id', (req, res) => {
  const id = req.params.id
  const url = urls.find((data) => data.id === id)
  
  // 如果找不到對應id則導回首頁
  if (!url) {
    res.redirect('/')
  }

  res.redirect(url.orig)
})


app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})