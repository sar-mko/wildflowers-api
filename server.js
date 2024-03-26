const express = require('express')
const app = express()
const PORT = 3000
const plantData = {
    "nevada": {
       "0":  {
            "name" : "Rayless goldenhead",
            "sciName" : "Acamptopappus sphaerocephalus",
            "season" : "March to June"
        },
        "1":  {
            "name" : "Dwarf sand verbena",
            "sciName" : "Abronia nana",
            "season" : "April to September"
        }
    },
    "california":{
        "0": {
            "name" : "Beach sand verbena",
            "sciName" : "Abronia umbellata",
            "season" : "January to December"
        },
        "1": {
            "name" : "Common yarrow",
            "sciName" : "Achillea millefolium",
            "season" : "March to October"
        }
      
    },
    "arizona":{
        "0": {
            "name" : "Superstition mallow",
            "sciName" : "Abutilon palmeri",
            "season" : "April to May"
        },
        "1": {
            "name" : "Frost-mat",
            "sciName" : "Achyronychia cooperi",
            "season" : "MJanuary to May"
        }
      
    },
    "colorado":{
        "0": {
            "name" : "Snowball sand verbena",
            "sciName" : "Abronia fragrans",
            "season" : "April to September"
        },
        "1": {
            "name" : "Wright's deervetch",
            "sciName" : "Acmispon wrightii",
            "season" : "April to August"
        }
      
    },
    "new mexico":{
        "0": {
            "name" : "Pine deervetch",
            "sciName" : "Acmispon oroboides",
            "season" : "March to September"
        },
        "1": {
            "name" : "Columbian monkshood",
            "sciName" : "Aconitum columbianum",
            "season" : "June to August"
        }
      
    }
}


app.listen(PORT, () => {
    console.log(`heard on ${PORT}`)
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res) => {
    res.json(plantData)
    })

app.get('/api/:state', (req,res) => {
    const state = req.params.state.toLowerCase()

    if(plantData[state]){
        res.json(plantData[state])
    }else{
        res.send('uh oh - invalid')
    }
})
