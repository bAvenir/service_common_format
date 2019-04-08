{
    "name": "Item name",
    "type" : "adapters:Lightbulb",
    "infrastructure-id": "Id of the VAS in your infrastructure",
    "adapter-id": "Id of adapter under which your item is register in you infrastructure",
    "properties": [
        {
            "pid": "brightness",
            "monitors": "adapters:Luminance",
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
                                "type": "integer"
                            }
                        }
                    ]
                }
            },
            "write_link": {
                "href": "/bulb/set-brightness/{oid}",
                "input": {
                    "type": "object",
                    "field": [
                        {
                            "name": "brightness-level",
                            "schema": {
                                "type": "integer"
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
    ],
    "actions": [
        {
            "aid": "set-brightness",
            "affects": "adapters:Luminance",
            "read_link": {
                "href": "/device/{oid}/status/{aid}",
                "output": {
                    "type": "object",
                    "field": [
                        {
                            "name": "action",
                            "schema": {
                                "type": "string"
                            }
                        },
                        {
                            "name": "status",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ]
                }
            },
            "write_link": {
                "href": "/bulb/set-brightness/{oid}",
                "input": {
                    "type": "object",
                    "field": [
                        {
                            "name": "brightness-level",
                            "schema": {
                                "type": "integer"
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
    ],
    "events": [
        {
            "eid": "set-brightness",
            "monitors": "adapters:Luminance",
            "output": {
                "type": "object",
                "field": [
                    {
                        "name": "observed-property",
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "value",
                        "schema": {
                            "type": "integer"
                        }
                    }
                ]
            }
        }
    ]
}
