{
    "_id" : ObjectId("598c34d67b613380f779deaf"),
    "info" : {
        "oid" : "cerknica_0",
        "type" : "SmartOven",
        "properties" : [
            {
                "pid" : "device_status",
                "monitors" : "device_status",
                "output" : {
                    "units" : "Adimensional",
                    "datatype" : "string"
                },
                "writable" : false,
                "read_links" : [
                    {
                        "href" : "/objects/{oid}/properties/{pid}",
                        "mediaType" : "application/json"
                    }
                ],
                "write_links" : [
                    {
                        "href" : "/objects/{oid}/properties/{pid}",
                        "mediaType" : "application/json"
                    }
                ]
            },
            {
                "pid" : "light",
                "monitors" : "light",
                "output" : {
                    "units" : "Adimensional",
                    "datatype" : "string"
                },
                "writable" : false,
                "read_links" : [
                    {
                        "href" : "/objects/{oid}/properties/{pid}",
                        "mediaType" : "application/json"
                    }
                ],
                "write_links" : [
                    {
                        "href" : "/objects/{oid}/properties/{pid}",
                        "mediaType" : "application/json"
                    }
                ]
            }
        ],
        "actions" : [
            {
                "aid" : "delayed_baking",
                "affects" : "delayed_baking_status",
                "read_links" : [
                    {
                        "href" : "/objects/{oid}/actions/{aid}",
                        "mediaType" : "application/json"
                    }
                ],
                "write_links" : [
                    {
                        "href" : "/objects/{oid}/actions/{aid}",
                        "mediaType" : "application/json"
                    }
                ],
                "input" : {
                    "units" : "Adimensional",
                    "datatype" : "string"
                }
            }
        ]
    }
}
