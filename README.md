# Thing description common format
This repository helps system integrators of energy or IoT infrastructrure describe their devices, services and smart energy component for registering them in VICINITY and SHAR-Q Platform and to implement their VICINITY and SHAR-Q Adapters.

The thig description common format is described in details in [VICINITY agent documentation](https://github.com/vicinityh2020/vicinity-agent/blob/master/docs/TD.md).

This repository provides templates for smart energy component, devices and services.

# Smart energy component of SHAR-Q Project
The the following [thing description templates] (https://github.com/bAvenir/thing_description_common_format/tree/master/device/sharq) are available:
* Battery
* Smartmeter
* Charging station
* Electric vehicle
* Photovoltaic
* General purpose input/output

# How to use the templates
To use template the following prerequisits needs to be fulfilled:
* [VICINITY Gateway API](https://vicinity-get-started.readthedocs.io/en/latest/getstarted.html#install-the-vicinity-gateway-api) needs to be configured and runnning;
* SHAR-Q Adapter needs to be registered in SHAR-Q/ VICINITY Platform;

## Register of the battery
To register the gpio following request needs to be send to Gateway API end-point. 
```
curl -X POST \
  http://localhost:8181/api/agents/<Adapter ID>/objects \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"adid":"<Adapter ID>", 
	"thingDescriptions": [{
	    "infrastructure-id": "dummygpio",
	    "adapter-id": "<Adapter ID>",
	    "name": "The example description of dummy gpio",
	    "type": "core:Device",
	    "properties": [
	        {
	            "pid": "onoff",
	            "monitors": "adap:OnOff",
	            "read_link": {
	                "href": "/device/{oid}/property/{pid}",
	                "output": {
	                    "type": "object",
	                    "field": [
	                        {
	                            "name": "property",
	                            "schema": {
	                                "type": "string"
	                            }
	                        },
	                        {
	                            "name": "value",
	                            "schema": {
	                                "type": "bolean"
	                            }
	                        }
	                    ]
	                }
	            },
	            "write_link": {
	                "href": "/gpio/set-onoff/{oid}",
	                "input": {
	                    "type": "object",
	                    "field": [
	                        {
	                            "name": "property",
	                            "schema": {
	                                "type": "string"
	                            }
	                        },
	                        {
	                            "name": "value",
	                            "schema": {
	                                "type": "bolean"
	                            }
	                        }
	                    ]
	                },
	                "output": {
	                    "type": "object",
	                    "field": [
	                        {
	                            "name": "success",
	                            "schema": {
	                                "type": "boolean"
	                            }
	                        }
	                    ]
	                }
	            }
	        }
	    ]
	}]
}'
```
Note that basic authentication head has been ommited and you need to substitute the you adapter id in the request.

The respose will return the smart object ID and Password. The response should look like this:
```
{
"oid":"********-****-****-****-7ce507f7a413",
"password":"**************************torqBg=",
"infrastructure-id":"dummygpio","nm-id":"5bacb926aaf3155f9f95ac0f",
"name":"The example description of dummy gpio",
"error":false
}
```

## Reading of the property
To read a property from the registered device simple request the RESP API endpoint of GW API as follows:
```
curl -X GET \
  http://localhost:8181/api/objects/********-****-****-****-7ce507f7a413/properties/onoff \
  -H 'Authorization: Basic OGNlYTZhOGEtZDA3MS00ZWY3LTgyMzItYjMyNWQwNTVlYmVjOmdmdfsfvsdfvsdfv1EQlJHRys3cE11SUdLUmE4NEtxQVRnbDZ2STdhU2VndTQ9' \
  -H 'Cache-Control: no-cache'
  ```
 
