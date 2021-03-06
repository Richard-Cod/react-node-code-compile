const fs = require('fs')
const { exec } = require('child_process');
const path = require('path');





const  exos = [
  {
    id : 1,
    folderName : "isOdd",
    question : "Ecrire une fonction qui renvoie si oui ou non un nombre est pair ",
    defaultCode : "print('hello world')",
    status : false,
  }
]

// Function for execuing python code
const pythonExecute = (data, input , exoId) => {
  const res = {
    err: false,
    msg: ""
  }
  return new Promise((resolve, reject)=>{
    console.warn("Exo id " , exoId)
      const exo = exos.find((value) => value.id == exoId)
      const folderName = "./tests/python/"+exo.folderName
      const fileName = folderName + "/funcFile.py" 

      saveFile(fileName, data)
        .then(()=>{
          // Create Input file
          fs.writeFile("input.txt", input, function(err) {
            if(err) {
                console.log(err);
                reject()
            } 
          });  
      
            // FILE SAVED SUCCESSFULLY
            // Generate the output file for it
            const filePath = path.join(__dirname,"../tests/python/"+exo.folderName+ "/test.py")

            console.log("FILE PATH >> "+filePath);

            const inputPath = path.join(__dirname, "../input.txt")
            // COMPILE THE C++ CODES
            exec('python '+filePath+" < "+ inputPath, (err, stdout, stderr) => {
                if (err) {
                  // IF COMPILATION ERROR
                  console.error(`exec error: ${err}`);
                  resolve({
                    err: true,
                    output: err,
                    error: stderr
                  })
                }
                resolve({
                  err: false,
                  output: stdout
                })
              })

        })
        .catch(()=>{
          console.log("ERROR SAVE FILE"+ saveFileRes)
          const err = {
            err: true,
            output: "Internal Server Error!"
          }
          resolve(err)
        })
  })


 
}




const saveFile = (name, data) => {
  return new Promise((resolve, reject) => {
    // Saving File
      console.log("SAVING FILES")
      fs.writeFile(name, data, function(err) {
        if(err) {
            console.log(err);
            reject()
        } else {
            console.log("The file was saved!");
            resolve()
        }
    }); 
  })
}





module.exports = {
    pythonExecute
}



