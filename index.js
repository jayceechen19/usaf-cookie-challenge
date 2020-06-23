/*Create a repository for this challenge named usaf-cookies-challenge.

Create an Express application that sets a cookie when routed to /login 
with their name. If a cookie is present with a name key, then it says 
"Welcome {name}! when the user routes to /hello". */

const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(cookieParser())
app.listen(port, ()=>console.log('Server running'))

app.get('/headers', (req, res) => {
    res.send(req.headers)
})
app.get('/login/:name', (req,res) => {
    res.cookie('name', req.params.name)
    res.send('Set cookie')
})
app.get('/hello', (req,res) => {
    if(req.cookies['name']){
        res.send(`Welcome ${req.cookies['name']}`)
    }
    else{
        res.send('No cookies set')
    }
})