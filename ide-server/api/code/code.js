const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const execute = require('../../compile/compile')
const deleteFile = require('./deleteFile')

router.get('/test',(req,res)=>{
    res.json({msg: "code route"})
})


router.post('/submit', (req,res)=>{
    console.log(req.body)
    const code = req.body.code
    const input = req.body.input
    const exoId = req.body.exoId

    const user = {
        id : 1,
        username : "tchapa",
    }
    
    // const lang = req.body.lang

    return execute.pythonExecute(code, input , exoId)
    .then(data=>{
        console.log("SUCCESSFULL PROMISE " + data)
        console.log("SENDING " + data)
        res.json(data)
        // deleteFile(path.join(__dirname, '../../input.txt'))
        // deleteFile(path.join(__dirname, '../../test.py'))
        // deleteFile(path.join(__dirname, '../../a.exe'))
    })
    .catch(err => {
        console.log("ERROR PROMISE " + err)
        // deleteFile(path.join(__dirname, '../../input.txt'))
        // deleteFile(path.join(__dirname, '../../test.py'))
        // deleteFile(path.join(__dirname, '../../a.exe'))
    })
  

})


module.exports =  router