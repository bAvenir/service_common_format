{
  "name": "Resource Management Service",
  "type": "Service",
  "version": "1.0.1",
  "link": [{
      "href":"https://play.google.com/store/apps/details?id=12341234",
      "mediaType": "application/opensearchdescription+xml"
    },
    {
      "href":"https://itunes.apple.com/sk/app/32984765523987564/id283416234?mt=12",
      "mediaType": "text/html"
    }],
  "properties": [
    {
        "monitors" : "AveragePowerConsumption",
        "requirement": "true",
        "output" : {
            "datatype" : "float",
            "units" : "kW"
        }},
    {
        "monitors" : "AverageWaterConsumption",
        "output" : {
            "datatype" : "float",
            "units" : "m3"
        }
    }
  ],
  "actions": [
    {
      "affects" : "AveragePowerConsumption",
      "input" : {}
      "output" : {}
      "write_links" : [{
        "href": "...url...",
        "mediaType": "application/json"
      }]
    }
  ],
  "events": [
    {
      "eid":"waterLeakage",
      "name": "WaterLeak",
      "output": {
        "datatype": "integer",
        "units":"Adimensional"
      }
    }
  ],
  "requirements":{
    "properties": [
      {
        "monitors":"ActualEnergyConsuption",
        "output": {
          "datatype" : "",
          "units" :"kwh"
        }
      },
      {
        "monitors":"ActualWaterConsuption",
        "output": {
          "datatype": "",
          "units": "m3h",
        }
      }],
    "actions": [
      {
        "affects": "OnOff",
        "input" : {
          "datatype": "",
          "units": "Adimensional"
        }
      }
    ],
    "events": [
      {
        "monitors":"ActualEnergyConsuption",
        "output": {
          "datatype" : "",
          "units" :"kwh"
        }
      }
    ]
  }
}
