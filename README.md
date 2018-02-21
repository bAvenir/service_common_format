# VICINITY Service Thing Description (STD)

The **VICINITY Service Thing Description (STD)** defines the VICINITY Value-added service and describes the interaction between devices and service layer and interaction between service and service user.

The *STDs* are created by Value-added service provider and registered in VICINITY Platform. The *STDs* are used to discover services and to perform actual interaction with the service.

## Vocabulary
---
In the specification the following conceptual terms needs to be defined:
### Value-added service
---
The service is defined by the following attributes:

| Field name | JSON Construct | Mandatory | Description |
| --- | --- | --- | ---|
| name | string | yes | Defines the human readable name of the service visible in the VICINITY Neighbourhood Manager
| type | string | yes | Defines type of Thing desctipion (default: 'Service')|
| version | string | yes |Defines the version of the service. It is possible to have registered different version of the services |
| oid | string | no | The unique identifier of the service in VICINITY Platform. Provided by the platform after successful service registration |
| requirements | array of objects | no | [see Requirements](#vocabulary) |
| properties | array of objects | no | [see Property](#property)  |
| actions | array of objects | no | [see Action](#action)  |
| events | array of objects | no | [see Event](#event) |


### Interaction resource
---
Interaction resource is any type of resource through which it is possible to interact with Thing. The resource can be property, action and event. The interaction resource can be digital representation of the real resource in physical representation of the Thing or can be calculated one.


#### Property
The [Property interaction pattern](https://www.w3.org/TR/wot-thing-description/#property) provides readable and/or writeable data that can be static (e.g., supported mode, rated output voltage, etc.) or dynamic (e.g., current fill level of water, minimum recorded temperature, etc.).

| Field name | JSON Construct | Mandatory | Description |
| --- | --- | --- | ---|
| monitors | array of objects | yes | One of the [property classes](http://iot.linkeddata.es/def/core/index-en.html) being monitored |
| pid | string | no | The unique name of the property in the single *STD*. |
| output | object | yes | see [W3C Thing Description typed system](https://www.w3.org/TR/wot-thing-description/#type-system) |
| read_links | array of objects | no | [see Link](https://www.w3.org/TR/wot-thing-description/#link) |



#### Action
The [Action interaction pattern](https://www.w3.org/TR/wot-thing-description/#action) triggers changes or processes on a Thing that take a certain time to complete (i.e., actions cannot be applied instantaneously like property writes). Examples include an LED fade in, moving a robot, brewing a cup of coffee, etc. Usually, ongoing Actions are modelled as Task resources, which are created when an Action invocation is received by the Thing.

| Field name | JSON Construct | Mandatory | Description |
| --- | --- | --- | ---|
| affects | array of objects | yes | One of the [property classes](http://iot.linkeddata.es/def/core/index-en.html) being affected by the property |
| aid | string | no | The unique name of the action in the single *STD*. |
| input | object | yes | see [W3C Thing Description typed system](https://www.w3.org/TR/wot-thing-description/#type-system) |
| output | object | yes | see [W3C Thing Description typed system](https://www.w3.org/TR/wot-thing-description/#type-system) |
| read_links | array of objects | no | [see Link](https://www.w3.org/TR/wot-thing-description/#link) |



#### Event
The [Event interaction pattern](https://www.w3.org/TR/wot-thing-description/#event) enables a mechanism for events to be notified by a Thing on a certain condition (e.g., the fill level of the water tank reached a given threshold).

> Note: event specification is undergoing.

### Requirements
---
The requirements are the list of interaction resources that are needed by the service to function properly (e.g. to calculate average energy consumption by the service the monitoring of action energy consumption is required). The requirements are specified as list of property, action and event requirements.

| Field name | JSON Construct | Mandatory | Description |
| --- | --- | --- | ---|
| properties | array of objects | no | Required list of properties |
| actions | array of objects | no | Required list of actions  |
| events | array of objects | no | Required list of acceptable events |

Each required interaction resource is specified by the interaction pattern fragment. The service defines only what it is necessary not how it should be accessible. For example, the service specify that it needs to monitor current energy consumption with the output data structure. However, it does not specify how to get it from a device. The interaction patterns fragments are as follow:

##### Property requirement
| Field name | JSON Construct | Mandatory | Description |
| --- | --- | --- | ---|
| monitors | array of objects | yes | One of the [property classes](http://iot.linkeddata.es/def/core/index-en.html) being monitored |
| output | object | yes | see [W3C Thing Description typed system](https://www.w3.org/TR/wot-thing-description/#type-system) |
| required | array of strings | no | Reference to `pid`, `aid` or `eid` which requires this required. If missing required for all interaction patterns|

##### Action requirement
| Field name | JSON Construct | Mandatory | Description |
| --- | --- | --- | ---|
| affects | array of objects | yes | One of the [property classes](http://iot.linkeddata.es/def/core/index-en.html) being affected by the property |
| aid | string | yes | The unique name of the action in the single *STD*. |
| input | object | yes | see [W3C Thing Description typed system](https://www.w3.org/TR/wot-thing-description/#type-system) |
| required | array of strings | no | Reference to `pid`, `aid` or `eid` which requires this required. If missing required for all interaction patterns|


##### Event requirement
> Note: event specification is undergoing.


## JSON Serialization
---
The following section defines examples of the service description which can be taken as template.

### Data aggregator
---
This *STD* pattern present the service which monitors the device properties to produce aggregated values to the Service user. This example describes the resource monitoring service which reads the Actual energy and water consumption and produces the average values. Note, properties does not have read_links nor pid provided -  this means that these properties are not available in VICINITY Peer to peer network, however it is only available through the service interface.

```javascript
{
  "name": "Resource monitoring service",
  "type": "Service",
  "version": "1.0.1",
  "oid": "f9bcceae-16f3-11e8-b642-0ed5f89f718b",
  "requirements":{
    "properties": [
      {
        "monitors":"ActualEnergyConsumption",
        "output": {
          "datatype" : "",
          "units" :"kwh"
        },
        "required": ['averagePowerConsumption']
      },
      {
        "monitors":"ActualWaterConsumption",
        "output": {
          "datatype": "",
          "units": "m3h"
        },
        "required": ['averageWaterConsumption']
      }]
  }
  "properties": [
    {
        "monitors" : "AveragePowerConsumption",
        "pid": "averagePowerConsumption",
        "requirement": "true",
        "output" : {
            "datatype" : "float",
            "units" : "kW"
        }
      }
    {
        "monitors" : "AverageWaterConsumption",
        "pid": "averageWaterConsumption",
        "output" : {
            "datatype" : "float",
            "units" : "m3"
        }
    }
  ]
}
```

#### Supporting multiple interaction patterns of one interaction resource
There might be the case that service supports the two interaction patterns to monitor on interaction resource, e.g. actual energy consumption. In this case the fragment of the *STD* will looks like as follows.
```javascript
"requirements":{
  "properties": [
    {
      "monitors":"ActualEnergyConsumption",
      "output": {
        "datatype" : "",
        "units" :"kwh"
      }
    }],
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
```

### Ecosystem controller
---
Ecosystem controller is able to monitor the devices for particular properties and perform the control actions based on business logic. Note, that *STD* does not describes the business logic. However, it defines the required action available which needs will be used by the service to perform control actions.

```javascript
{
  "name": "Resource management service",
  "type": "Service",
  "version": "1.0.1",
  "oid": "f9bcceae-16f3-11e8-b642-0ed5f89f718b",
  "requirements":{
    "properties": [
      {
        "monitors":"ActualEnergyConsumption",
        "output": {
          "datatype" : "",
          "units" :"kwh"
        },
        "required": ['averagePowerConsumption']
      },
      {
        "monitors":"ActualWaterConsumption",
        "output": {
          "datatype": "",
          "units": "m3h"
        }
        "required": ['averageWaterConsumption']
      }],
    "actions": [
      {
        "affects": "OnOff",
        "input" : {
          "datatype": "",
          "units": "Adimensional"
        }
        "required": ['waterLeak']
      }
    ],
    "events": [
      {
        "monitors":"WaterLeak",
        "output": {
          "datatype": "boolean",
          "units": "Adimensional"
        }
        "required": ['waterLeak']
      }
    ]
  }
  "properties": [
    {
      "monitors" : "AveragePowerConsumption",
      "pid": "averagePowerConsumption",
      "output" : {
          "datatype" : "float",
          "units" : "kW"
      }
      "read_links": [
        {
          "href" : "http://api.myexample.com/avgPowerConsumption",
          "mediaType" : "application/json"
        }
      ]
    },
    {
      "monitors" : "AverageWaterConsumption",
      "pid": "averageWaterConsumption",
      "output" : {
          "datatype" : "float",
          "units" : "m3"
      }
    },
    {
      "monitors" : "WaterLeak",
      "pid": "waterLeak",
      "output" : {
          "datatype" : "boolean",
          "units" : "Adimensional"
      }
    }
  ]
}
```

## JSON STD Schema
> Note: JSON STD Schema is under development



---
![H2020](/images/h2020-logo.png) This project has received funding from the European Union's Horizon 2020 Research and innovation programme under Grand Agreement number: 688467 (VICINITY) and 731285 (SHAR-Q).
