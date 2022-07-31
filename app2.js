const express = require("express")
const request = require('request')
const mongoose = require('mongoose')
const Data = require("./data")

const app = express()

var mongoDB = "mongodb://localhost/TTsensor"
mongoose.connect(mongoDB)

const data_url = "https://naturetalkers.altervista.org/C0210045/ttcloud.txt"

/*const ttPlusSchema = mongoose.model("TTPlus",
    new mongoose.Schema({
    date: Date,
    device_type: String,
    gain: String,
    id: Number,
    idTree: Number,
    integration_time: String,
    line_number: Number,
    time: String
  })
);*/


/*async function createTTP(tab) {
    const ttp = ttPlusSchema({
        date: Date,
        device_type: String,
        gain: String,
        id: Number,
        idTree: Number,
        integration_time: String,
        line_number: Number,
        time: String
    })

    for(let i=0; i<lines.length-2; i++){

        if( (lines[3] == "4D") || (lines[3] == "49")){

            
           ttp.add(lines[i])
        }
    }
    const result = await ttp.save()
    console.log(result);
}*/


const ttCloudSchema = mongoose.model("TTCloud",
    new mongoose.Schema({
    battery_level: String,
    country: String,
    firmware_version: String,
    mobile_country_code: String,
    ttcloud_signal_strength: String,
    country_code: String,
    data_not_sent: String,
    date: Date,
    device_type: String,
    id: Number,
    line_number: Number,
    network_registration: String,
    number_records: Number,
    time: String
    })
)

async function createTTC(tab) {
    const ttc = ttCloudSchema({
        battery_level: String,
        country: String,
        firmware_version: String,
        mobile_country_code: String,
        ttcloud_signal_strength: String,
        country_code: String,
        data_not_sent: String,
        date: Date,
        device_type: String,
        id: Number,
        line_number: Number,
        network_registration: String,
        number_records: Number,
        time: String
    })

    
    ttc.insert(ttcloud_array)
    const result = await ttc.save()
    console.log(result);


}





function name(url) {
    request(url,(error, { body}) => { 
        if (error) {
            console.error('error:', error);
        }

        var lines = body.split('\r\n')
        var ttcloud_array = []
        var ttplus_array = []
        var tts_array = []

        //createTTP(lines[0])
        console.log('Database updated');
        //console.console.loglog(lines[1])
        ttcloud_array.push(lines[1].split(";"))
        console.log(ttcloud_array)
        
        
        /* for(let i=0; i<lines.length-2; i++){

            if( (lines[3] == "4D") || (lines[3] == "49")){

                
                createTTP(lines[i])

                //ttcloud_array.push(lines[i].split(";"))
                //console.log(ttplus_array)
            
            }
            /*else if((lines[3] == "4B") || (lines[3] == "4C")){
                //TT+
            }
            else if((lines[3] == "55") ){
                //TTS
            }
            else{

            }
        } */
    })

       
}







name(data_url)




/*const start = () => {
    app.listen(5000, () => console.log("hiiii"))
    name(data_url)
}

start()*/
