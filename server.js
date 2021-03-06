const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))
app.get('/kenyanrunner', (req, res) => res.render('kenyanrunner'))

app.listen(port, () => console.log(`listening on port ${port}!`))