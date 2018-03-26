{
    "oid" : "hvacs__HVAC_LG_02",
    "type" : "HVACSensor"
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
        }]
}
