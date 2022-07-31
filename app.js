const express = require("express")
const request = require('request')
const mongoose = require('mongoose')

const app = express()

const data_url = "https://naturetalkers.altervista.org/C0210045/ttcloud.txt"


function name(url) {
    request(url,(error, { body}) => { 
        if (error) {
            console.error('error:', error);
        }
        var lines = body.split('\r\n')
        
       for(let i=0; i<lines.length-2; i++) {
            if(lines[i] in lines) {    
                let array = lines[i].split(";")
                

                

            }
        }
    })
}


const start = () => {
    app.listen(3000, () => console.log("hiiii"))
    name(data_url)
}

start()