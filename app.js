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
app.set('view engine','html')

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')

})
app.get('/views/trainer', (req, res) => {
    res.sendFile(__dirname + '/views/trainer.html')

})
app.get('/views/admin', (req, res) => {
    res.sendFile(__dirname + '/views/admin.html')

})
app.get('/views/modules', (req, res) => {
    res.sendFile(__dirname + '/views/modules.html')

})
app.get('/views/signin', (req, res) => {
    res.sendFile(__dirname + '/views/signin.html')

})
//Listening on port
app.listen( port, hostname, (error) => console.log(`Server running at http://${hostname}:${port}/`))

