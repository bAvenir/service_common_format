{
    "name" : "charginStation",
    "type" : "ChargingStation",
    "properties" : [
      {
        "monitors" : "NominalCapacity",
        "pid": "nominalCapacity",
        "output": {
          "datatype" : "float",
          "units": "kVA"
        },
        "read_links": [
          {
              "href": "/objects/charginStation/properties/nominalCapacity",
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "NumberOfConnectors",
        "pid": "numberOfConnectors",
        "output": {
          "datatype" : "integer",
          "units": "Adimensional"
        },
        "read_links": [
          {
              "href": "/objects/charginStation/properties/numberOfConnectors",
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "CurrentActivePowerLoad",
        "pid": "currentActivePowerLoad",
        "output": {
          "datetype": "float",
          "units": "kW"
        }
        "read_links": [
          {
              "href": "/objects/charginStation/properties/currentActivePowerLoad",
              "mediaType": "application/json"
          }
        ]
        "writable": true,
        "write_links": [
          {
              "href": "/objects/charginStation/properties/currentActivePowerLoad",
              "mediaType": "application/json"
          }
        ]
      },
      {
        "monitors" : "CurrentActivePowerGeneration",
        "pid": "currentActivePowerGeneration",
        "output": {
          "datetype": "float",
          "units": "kW"
        }
        "read_links": [
          {
              "href": "/objects/charginStation/properties/currentActivePowerGeneration"
              "mediaType": "application/json"
          }
        ]
        "writable": true,
        "write_links": [
          {
              "href": "/objects/charginStation/properties/currentActivePowerGeneration"
              "mediaType": "application/json"
          }
        ]
      },
      {
        "monitors" : "CurrentReactivePowerLoad",
        "pid": "currentReactivePowerLoad",
        "output": {
          "datetype": "float",
          "units": "kW"
        }
        "read_links": [
          {
              "href": "/objects/charginStation/properties/currentReactivePowerLoad"
              "mediaType": "application/json"
          }
        ]
        "writable": true,
        "write_links": [
          {
              "href": "/objects/charginStation/properties/currentReactivePowerLoad"
              "mediaType": "application/json"
          }
        ]
      },
      {
        "monitors" : "CurrentReactivePowerGeneration",
        "pid": "currentReactivePowerGeneration",
        "output": {
          "datetype": "float",
          "units": "kW"
        }
        "read_links": [
          {
              "href": "/objects/charginStation/properties/currentReactivePowerGeneration"
              "mediaType": "application/json"
          }
        ]
        "writable": true,
        "write_links": [
          {
              "href": "/objects/charginStation/properties/currentReactivePowerGeneration"
              "mediaType": "application/json"
          }
        ]
      },
      {
        "monitors" : "ConnectorsStatus",
        "pid": "connectorsStatus",
        "output": {
          "datatype": "array",
          "items": {
            "type": "object",
            "fields": [
              {
                  "name": "id",
                  "value": {
                    "type": "integer"
                  }
              }
              {
                "name": "status",
                "value": {
                  "type": "string"
                }
              }
            ]
          }
        }
        "read_links": [
          {
              "href": "/objects/charginStation/properties/connectorsStatus"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "ChargingSessionDuration",
        "pid": "chargingSessionDuration",
        "output": {
          "datatype": "array",
          "items": {
            "type": "object",
            "fields": [
              {
                  "name": "id",
                  "value": {
                    "type": "integer"
                  }
              }
              {
                "name": "chargingSessionDuration",
                "value": {
                  "type": "integer",
                  "units": "seconds"
                }
              }
            ]
          }
        }
        "read_links": [
          {
              "href": "/objects/charginStation/properties/chargingSessionDuration"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "ChargingActivePowerSetPoint",
        "pid": "chargingActivePowerSetPoint",
        "output": {
          "datatype": "array",
          "items": {
            "type": "object",
            "fields": [
              {
                  "name": "id",
                  "value": {
                    "type": "integer"
                  }
              }
              {
                "name": "chargingActivePowerSetPoint",
                "value": {
                  "type": "float",
                  "units": "kW"
                }
              }
            ]
          }
        }
        "read_links": [
          {
              "href": "/objects/charginStation/properties/chargingActivePowerSetPoint",
              "mediaType": "application/json"
          }
        ]
        "writable": true
        "write_links": [
          {
              "href": "/objects/charginStation/properties/chargingActivePowerSetPoint"
              "mediaType": "application/json"
          }
        ]
      },
      {
        "monitors":"ChargingProfile",
        "pid": "chargingProfile"
        "output" : {
            "datatype" : "Array",
            "items": {
              "type": "object",
              "fields": [
                {
                  "name": "id",
                  "value": {
                    "type": "integer"
                  }
                },
                {
                  "name": "timeSlot",
                  "type": "object",
                  "fields": [
                    {
                      "name": "start",
                      "value": {
                        "type": "number",
                        "untis": "seconds"
                      }
                    },
                    {
                      "name": "end",
                      "value": {
                        "type": "number",
                        "units": "seconds"
                      }
                    }
                  ]
                }
              ]
            }
        }
        "writable": "true",
        "read_links": [
          {
              "href": "/objects/charginStation/properties/chargingProfile",
              "mediaType": "application/json"
          }
        ]
        "write_links": [
          {
              "href": "/objects/charginStation/properties/chargingProfile",
              "mediaType": "application/json"
          }
      }
      {
        "monitors" : "Location",
        "pid": "location",
        "output": {
          "datatype" : "",
          "units": ""
        },
        "read_links": [
          {
              "href": "/objects/charginStation/properties/location"
              "mediaType": "application/json"
          }
        ]
        "writable": false
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
                  "href" : "/objects/charginStation/properties/status",
                  "mediaType" : "application/json"
              }
          ],
          "write_links" : [
              {
                  "href" : "/objects/charginStation/actions/UCtrlOnOff",
                  "mediaType" : "application/json"
              }
          ]
      }
    ],
    "events" : []
}
