const express = require("express")
const request = require('request')
const mongoose = require('mongoose')


const app = express()

var mongoDB = "mongodb://localhost/TTsensor"
mongoose.connect(mongoDB)

const data_url = ""


const ttCloudSchema4B = mongoose.model("TTCloud_4B",
    new mongoose.Schema({
        date: String,
        time: String,
        id: String,
        number_records: String,
        device_type: String,
        timeestamp: String,
        line_number: String,
        data_not_sent: String,
        country_code: String,
        mobile_country_code: String,
        network_registration: String,
        ttcloud_signal_strength: String,
        battery_level: String,
        firmware_version: String
    })
)

const ttCloudSchema4C = mongoose.model("TTCloud_4C",
    new mongoose.Schema({
        date: String,
        time: String,
        id: String,
        number_records: String,
        device_type: String,
        timeestamp: String,
        tbl_locked: String,
        num_first_sensor: String,
        rssi_tt1_ttcloud : String,
        rssi_tt2_ttcloud : String,
        rssi_tt3_ttcloud : String,
        rssi_tt4_ttcloud : String,
        rssi_tt5_ttcloud : String,
        rssi_tt6_ttcloud : String,
        rssi_tt7_ttcloud : String,
        rssi_tt8_ttcloud : String,
        rssi_tt9_ttcloud : String,
        rssi_tt11_ttcloud: String,
        rssi_tt12_ttcloud: String,
        rssi_tt13_ttcloud: String,
        rssi_tt14_ttcloud: String,
        rssi_tt15_ttcloud: String,
        rssi_tt16_ttcloud: String,
        rssi_tt17_ttcloud: String,
        rssi_tt18_ttcloud: String,
        rssi_tt19_ttcloud: String,
        rssi_tt20_ttcloud: String,
        rssi_tt21_ttcloud: String,
    })
)

async function createTTC4B(tab,id,t,d) {
    const ttc = ttCloudSchema4B({
        date: d,
        time: t,
        tt_id:id,
        number_records: tab[1],
        device_type:tab[2],
        timeestamp:tab[3],
        line_number: tab[4],
        data_not_sent: tab[5],
        country_code: tab[6],
        mobile_country_code: tab[7],
        network_registration: tab[8],
        ttcloud_signal_strength: tab[9],
        battery_level: tab[10],
        firmware_version: tab[11]
    })

    ttc.save(function(err,ttCloudSchema4B) {
        if (err) return console.error(err)
        console.log( " saved to ttcloud_4B collection.")
    })
}


async function createTTC4C(tab,id,t,d) {
    const ttc2 = ttCloudSchema4C({
        date: d,
        time: t,
        tt_id:id,
        number_records: tab[1],
        device_type:tab[2],
        timeestamp:tab[3],
        tbl_locked: tab[4],
        num_first_sensor: tab[5],
        rssi_tt1_ttcloud : tab[6],
        rssi_tt2_ttcloud : tab[7],
        rssi_tt3_ttcloud : tab[8],
        rssi_tt4_ttcloud : tab[9],
        rssi_tt5_ttcloud : tab[10],
        rssi_tt6_ttcloud : tab[11],
        rssi_tt7_ttcloud : tab[12],
        rssi_tt8_ttcloud : tab[13],
        rssi_tt9_ttcloud : tab[14],
        rssi_tt10_ttcloud: tab[15],
        rssi_tt11_ttcloud: tab[16],
        rssi_tt12_ttcloud: tab[17],
        rssi_tt13_ttcloud: tab[18],
        rssi_tt14_ttcloud: tab[19],
        rssi_tt15_ttcloud: tab[20],
        rssi_tt16_ttcloud: tab[21],
        rssi_tt17_ttcloud: tab[22],
        rssi_tt18_ttcloud: tab[23],
        rssi_tt19_ttcloud: tab[24],
        rssi_tt20_ttcloud: tab[25],
        rssi_tt21_ttcloud: tab[26],
        not_connected_device1: tab[27],
        not_connected_device2: tab[28],
        not_connected_device3: tab[29]
    })

    ttc2.save(function(err,ttCloudSchema4C) {
        if (err) return console.error(err)
        console.log( " saved to ttcloud_4C collection.")
    })
}

const ttPlusSchema4D = mongoose.model("TTPlus_4D",
    new mongoose.Schema({
        date: String,
        time: String,
        tt_id: String,
        record_number: String,
        device_type: String,
        timestamp: String,
        tref0: String,
        theat0: String,
        growth_sensor: String,
        adc_badgap: String,
        number_bits: String,
        air_humidity: String,
        air_temperature: String,
        gz_mean: String,
        gz_std: String,
        gy_mean: String,
        gy_std: String,
        gx_mean: String,
        gx_std: String,
        tref1: String,
        theat1: String,
        stwc: String,
        adc_vbat: String
    })
)


async function createTTP4D(tab,id,t,d) {
    const ttp = ttPlusSchema({
        date: d,
        time: t,
        tt_id:id,
        record_number: tab[1],
        device_type: tab[2],
        timestamp: tab[3],
        tref0: tab[4],
        theat0: tab[5],
        growth_sensor: tab[6],
        adc_badgap: tab[7],
        number_bits: tab[8],
        air_humidity: tab[9],
        air_temperature: tab[10],
        gz_mean: tab[11],
        gz_std: tab[12],
        gy_mean: tab[13],
        gy_std: tab[14],
        gx_mean: tab[15],
        gx_std: tab[16],
        tref1: tab[17],
        theat1: tab[18],
        stwc: tab[19],
        adc_vbat: tab[20]
    })

    ttp.save(function(err,ttPlusSchema4D) {
        if (err) return console.error(err)
        console.log( " saved to ttplus_4D collection.")
    })
}  

const ttPlusSchema49 = mongoose.model("TTPlus_49",
    new mongoose.Schema({
    date: String,
    time: String,
    tt_id: String,
    record_number: String,
    device_type: String,
    timestamp: String,
    as7263_610: String,
    as7263_680: String,
    as7263_730: String,
    as7263_760: String,
    as7263_810: String,
    as7263_860: String,
    as7262_450: String,
    as7262_500: String,
    as7262_550: String,
    as7262_570: String,
    as7262_600: String,
    as7262_650: String,
    integration_time: String,
    gain: String
})
)

async function createTTP49(tab,id,t,d) {
    const ttp49 = ttPlusSchema49({
        date: d,
        time: t,
        tt_id:id,
        number_records: tab[1],
        device_type: tab[2],
        timeestamp: tab[3],
        as7263_610: tab[4],
        as7263_680: tab[5],
        as7263_730: tab[6],
        as7263_760: tab[7],
        as7263_810: tab[8],
        as7263_860: tab[9],
        as7262_450: tab[10],
        as7262_500: tab[11],
        as7262_550: tab[12],
        as7262_570: tab[13],
        as7262_600: tab[14],
        as7262_650: tab[15],
        integration_time: tab[16],
        gain: tab[17]
    })
    ttp49.save(function(err, ttPlusSchema49) {
        if (err) return console.error(err)
        console.log(" saved to ttplus49 collection.")
    })
}


function name(url) {
    request(url,(error, { body}) => {
        if (error) {
            console.error('error:', error);
        }

        var lines = body.split('\r\n')
        var ch= []
        
        console.log('Database updated');

        for(let i=0; i<2; i++){
            ch =lines[i].split(";")
            var k = ch[0].split(",")
            var id = k[1]
            var td = k[0].split(" ")
            var t = td[0]
            var d =td[1]
            switch (ch[2]){
                case "4B":{
                    createTTC4B(ch,id,t,d)
                    break
                }
                case "4C":{
                    createTTC4C(ch,id,t,d)
                    break
                }
                case "4D":{
                    createTTP4D(ch,id,t,d)
                    break
                }
                case "49":{
                    createTTP49(ch,id,t,d)
                    break
                }
            }
            
        } 
          
    })  
    
}




/*ttCloudSchema4B.find({ battery_level}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", docs);
    }
});*/





name(data_url)


/*const start = () => {
    app.listen(5000, () => console.log("hiiii"))
    name(data_url)
}

start()*/
