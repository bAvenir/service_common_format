{
    "name" : "batterySimulator",
    "type" : "BatteryStorage",
    "properties" : [
      {
        "monitors" : "NominalCapacity",
        "pid": "nominalCapacity",
        "output": {
          "datatype" : "float",
          "units": "kWh"
        },
        "read_links": [
          {
              "href": "/objects/batterySimulator/properties/nominalCapacity"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "NominalPower",
        "pid": "nominalPower",
        "output": {
          "datatype" : "",
          "units": "kVA"
        },
        "read_links": [
          {
              "href": "/objects/batterySimulator/properties/nominalPower"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "StateOfCharge",
        "pid": "soc",
        "output": {
          "datatype" : "",
          "units": "percentage"
        },
        "read_links": [
          {
              "href": "/objects/batterySimulator/properties/nominalPower"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "CurrentActivePowerLoad",
        "pid": "currentActivePowerLoad",
        "output": {
          "datatype" : "float",
          "units": "kW"
        },
        "read_links": [
          {
            "href": "/object/batterySimulator/properties/currentActivePowerLoad",
            "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "CharingActivePowerSetPoint",
        "pid": "charingActivePowerSetPoint",
        "output": {
          "datatype" : "float",
          "units": "kW"
        }
        "read_links": [
          {
            "href": "/object/batterySimulator/properties/charingActivePowerSetPoint",
            "mediaType": "application/json"
          }
        ]
        "writable": true,
        "write_links" : [
            {
                "href" : "/objects/batterySimulator/properties/charingActivePowerSetPoint",
                "mediaType" : "application/json"
            }
        ]
      }
    ],
    "actions" : [
        {
            "affects" : "OnOff",
            "aid" : "status",
            "input" : {
                "datatype" : "",
                "units" : "Adimensional"
            },
            "read_links" : [
                {
                    "href" : "/objects/batterySimulator/properties/status",
                    "mediaType" : "application/json"
                }
            ],
            "write_links" : [
                {
                    "href" : "/objects/batterySimulator/actions/UCtrlOnOff",
                    "mediaType" : "application/json"
                }
            ]
        }
    ]
}
