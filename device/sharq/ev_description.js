{
    "name" : "electricVehicle",
    "type" : "ElectricVehicle",
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
              "href": "/objects/electricVehicle/properties/nominalCapacity"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "MaximumChargingPower",
        "pid": "maximumChargingPower",
        "output": {
          "datatype" : "float",
          "units": "kW"
        },
        "read_links": [
          {
              "href": "/objects/electricVehicle/properties/maximumChargingPower"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "MaximumDischargingPower",
        "pid": "maximumDischargingPower",
        "output": {
          "datatype" : "float",
          "units": "kW"
        },
        "read_links": [
          {
              "href": "/objects/electricVehicle/properties/maximumDischargingPower"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "AverageEnergyConsumption",
        "pid": "averageEnergyConsumption",
        "output": {
          "datatype" : "float",
          "units": "kWh/km"
        },
        "read_links": [
          {
              "href": "/objects/electricVehicle/properties/averageEnergyConsumption"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "UpperStateOfChargeBoundary",
        "pid": "upperSOCBoundary",
        "output": {
          "datatype" : "float",
          "units": ""
        },
        "read_links": [
          {
              "href": "/objects/electricVehicle/properties/upperSOCBoundary"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "LowerStateOfChargeBoundary",
        "pid": "lowerSOCBoundary",
        "output": {
          "datatype" : "float",
          "units": ""
        },
        "read_links": [
          {
              "href": "/objects/electricVehicle/properties/lowerSOCBoundary"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
      {
        "monitors" : "CableMaxCurrent",
        "pid": "cableMaxCurrent",
        "output": {
          "datatype" : "float",
          "units": "A"
        },
        "read_links": [
          {
              "href": "/objects/electricVehicle/properties/cableMaxCurrent"
              "mediaType": "application/json"
          }
        ]
        "writable": false
      },
    ],
    "actions" : [],
    "events" : []
}
