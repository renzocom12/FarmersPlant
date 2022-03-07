const http = require('http')
const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/javascripts', express.static(__dirname + 'public/javascripts'))

//Set Views
app.set('views', '/views')
app.set('view engine','ejs')

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')

})
app.get('/trainer', (req, res) => {
    res.sendFile(__dirname + '/views/trainer.html')

})
app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/views/admin.html')

})

//Listening on port
app.listen( port, hostname, (error) => console.log(`Server running at http://${hostname}:${port}/`))

