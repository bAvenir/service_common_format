# VICINITY Service Thing Description (STD)

The **VICINITY Service Thing Description (STD)** defines the VICINITY Value-added service and describes the interaction between devices and service layer and interaction between service and service user.

The *STDs* are created by Value-added service provider and registered in VICINITY Platform. The *STDs* are used to discover services and to perform actual interaction with the service.

## Vocabulary
In the specification the following conceptual terms needs to be defined:
### Value-added service
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
Interaction resource is any type of resource through which it is possible to interact with Thing. The resource can be property, action and event. The interaction resource can be digital representation of the real resource in physical representation of the Thing or can be calculated one.
### Property
The [Property interaction pattern](https://www.w3.org/TR/wot-thing-description/#property) provides readable and/or writeable data that can be static (e.g., supported mode, rated output voltage, etc.) or dynamic (e.g., current fill level of water, minimum recorded temperature, etc.).
### Action
The [Action interaction pattern](https://www.w3.org/TR/wot-thing-description/#action) triggers changes or processes on a Thing that take a certain time to complete (i.e., actions cannot be applied instantaneously like property writes). Examples include an LED fade in, moving a robot, brewing a cup of coffee, etc. Usually, ongoing Actions are modelled as Task resources, which are created when an Action invocation is received by the Thing.
### Event
The [Event interaction pattern](https://www.w3.org/TR/wot-thing-description/#event) enables a mechanism for events to be notified by a Thing on a certain condition (e.g., the fill level of the water tank reached a given threshold).
### Requirements
TBD

## Standard patterns

### Data collector

### Ecosystem controller

### Data aggregator

## JSON Serialization

### Header

### Interaction with Service

### Required input for the VICINITY Service Thing Description


### Typed system of properties, actions and events
VICINITY Service Thing description's properties, action and events include input and output parameters support [W3C Thing Description typed system](https://www.w3.org/TR/wot-thing-description/#type-system).

### Links
