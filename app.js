const express = require('express')
const morgan =  ('morgan')
const app = express()


//MIDDLEWARE
app.use('/special/', (req, res)=>{
    res.send('Estamos en especial')
})

app.use('/', (req, res)=>{
    res.send('Hello World')
})

//server
const port = 3000
app.listen(port, ()=>{
    console.log(`Escuchando puerto ${port}`)
})