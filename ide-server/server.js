const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// IMPORTING ALL THE FILES
const code = require('./api/code/code')
app.use('/api/code',code)



const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})


