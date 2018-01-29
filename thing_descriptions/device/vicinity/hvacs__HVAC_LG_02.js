{
    "_id" : ObjectId("59957fd37b613380f77d6d7f"),
    "info" : {
        "oid" : "hvacs__HVAC_LG_02",
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
                        "href" : "/objects/b347e0e4-a23f-4896-bd0b-6692d5eac529/properties/status",
                        "mediaType" : "application/json"
                    }
                ],
                "write_links" : [
                    {
                        "href" : "/objects/{oid}/actions/UCtrlOnOff",
                        "mediaType" : "application/json"
                    }
                ]
            }
        ],
        "properties" : [
            {
                "monitors" : "AmbientTemperature",
                "output" : {
                    "datatype" : "",
                    "units" : "Β°C"
                },
                "pid" : "setTemp",
                "read_links" : [
                    {
                        "href" : "/objects/b347e0e4-a23f-4896-bd0b-6692d5eac529/properties/setTemp",
                        "mediaType" : "application/json"
                    }
                ],
                "writable" : true,
                "write_links" : [
                    {
                        "href" : "/objects/{oid}/properties/UControlTempSetPoint",
                        "mediaType" : "application/json"
                    }
                ]
            },
            {
                "monitors" : "AmbientTemperature",
                "output" : {
                    "datatype" : "",
                    "units" : "Β°C"
                },
                "pid" : "tempAct",
                "read_links" : [
                    {
                        "href" : "/objects/b347e0e4-a23f-4896-bd0b-6692d5eac529/properties/tempAct",
                        "mediaType" : "application/json"
                    }
                ],
                "writable" : false,
                "write_links" : [
                    {
                        "href" : "/objects/{oid}/properties/tempAct",
                        "mediaType" : "application/json"
                    }
                ]
            },
            {
                "monitors" : "Mode",
                "output" : {
                    "datatype" : "",
                    "units" : "Adimensional"
                },
                "pid" : "userControl",
                "read_links" : [
                    {
                        "href" : "/objects/b347e0e4-a23f-4896-bd0b-6692d5eac529/properties/userControl",
                        "mediaType" : "application/json"
                    }
                ],
                "writable" : false,
                "write_links" : [
                    {
                        "href" : "/objects/{oid}/properties/userControl",
                        "mediaType" : "application/json"
                    }
                ]
            }
        ],
        "type" : "HVACSensor"
    }
}
