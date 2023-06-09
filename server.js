let express = require('express')
let path = require('path')
let states_api = require('./routes/states')

let app = express()

let vueAppPath = path.join(__dirname, 'client', 'dist')
app.use(express.static(vueAppPath))

app.use(express.json()) // enable parsing JSON

app.use('/api', states_api)

app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.error(err.stack)    // log for developer use
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('App running on port', server.address().port)
})