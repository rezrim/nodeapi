const bcrypt = require('bcrypt')

let hash = nans3u82nduh293h8db292882h89h8
let cek = bcrypt.compareSync("DILo", hash, (err, hashing) => {
    if(hashing){
        console.log("Berhasil")
    }else{
        console.log("Error")
    }
})