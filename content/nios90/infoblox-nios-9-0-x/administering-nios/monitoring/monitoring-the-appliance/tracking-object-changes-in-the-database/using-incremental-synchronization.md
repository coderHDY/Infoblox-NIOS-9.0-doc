---
title: "Using Incremental Synchronization"
source: "/space/nios90/1471219487"
pageId: "1471219487"
---
Incremental synchronization synchronizes only those objects that are updated since the previous synchronization. With incremental synchronization, you can query NIOS for any updates and when updates are found, NIOS returns the changed objects since the previous incremental synchronization. Incremental synchronization synchronizes the NIOS database for object changes such as addition, updates, or deletion, mostly via scripts. The incremental synchronization query consists of object types, a cookie of the form  
`&lt;id of db:sequence_id&gt;`, a sequence ID and an optional `exclude_deleted` object to indicate if the deleted objects must be excluded from the results. NIOS includes the deleted records in the results by default.

> **warning**
>
> ### Note
> 
> Infoblox recommends that you use `fileop-&gt;read` for incremental synchronization when the updated objects are large in number.

Note the following about incremental synchronization:

- You cannot request an incremental synchronization to get updated (created, updated or deleted) objects after a full synchronization.
- For performance reasons, NIOS returns the objects that changed and not the object data that changed. Infoblox recommends that you figure out what changed by comparing the object with the previous version in the client database.
- Incremental synchronization may take a longer time to complete depending on the number of changes. For example, if 50K objects are requested with all fields on an IB-4015 appliance, an incremental synchronization approximately takes 2 minutes. When 50K objects are requested with standard RESTful API fields on an IB-4015, the synchronization process completes in approximately 1 minute.
- The size of the memory increases when the number of objects increases. Infoblox recommends that you use `_max_results` to limit the number of results or use the asynchronous `fileop-&gt;read` operation.
- Infoblox recommends that for a busy Grid with a high Rate of Change that is greater than 500/sec, you must run an incremental synchronization more frequently. Example: If the expected Rate of Change for objects in the Grid is 50/sec, you can schedule an incremental synchronization every 5-10 minutes. If the Rate of Change for objects is 200/sec, schedule an incremental synchronization every minute or every 2 minutes.
- Infoblox recommends that you include all object types when you query using an incremental synchronization, so that it returns the highest sequence ID for all objects that can be used for subsequent incremental updates. If you query only selected object types such as A record and zone, NIOS returns the highest sequence ID for those object types only.  
  Consider an example where A record, Network, and A record are the object types with sequence ID 4, 5 and 6 respectively. When you query for an A record object type with a previous sequence ID using incremental synchronization, NIOS returns A record with the highest sequence ID, which is 6 and does not return the network object. Meanwhile, if you add or update a network object, then in the subsequent incremental synchronization it does not return the network object and you will lose updates made to the network object. Hence, Infoblox recommends that you include all object types in the query to ensure that you do not lose updates made to other object types.
- You cannot perform a full or an incremental synchronization during Grid Master Candidate promotions, restores, and upgrades.
- The output of an incremental synchronization is either in JSON or XML format.

The following are a few samples of API requests for incremental synchronization:

- To get updates with all_objects_supported_in_version=2.5:

`curl -k1 -u admin:infoblox -H content-type:application/json -X GET `

`https://10.35.6.87/wapi/v2.5/db_objects?start_sequence_id=992684967:0\&all_object_type `

`s_supported_in_version=2.5\;return_fields=last_sequence_id,object,object_type,unique_id\;_return_type=json`

The response for the above API request contains all fields of all object types.

- To get an A record and an auth zone object update:

`curl -k1 -u admin:infoblox -H content-type:application/jason -X GET`  
`https://10.32.2.202/wapi/v2.5/db_objects?start_sequence_id=183566281:0\&object_types=record:a,zone_auth\;_return_fields=last_sequence_id,object,object_type,unique_id\;_return_type=json`

The response is as follows:

`[{"_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDA:19", "object": {"_ref":`  
`"zone_auth/ZG5zLnpvbmUkLl9kZWZhdWx0LmNvbS5mb28:foo.com/default", "fqdn": "foo.com",`  
`"view": "default"}, "object_type": "zone_auth", "unique_id":`  
`"087af628fa03418faa0577b953807efc"}, {"_ref":`  
`"db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDE:21", "object": {"_ref":`  
`"record:a/ZG5zLmJpbmRfYSQuX2RlZmF1bHQuY29tLmZvbyxhcmVjMSwxLjIuMy4y:arec1.foo.com/default", "ipv4addr": "1.2.3.2", "name": "arec1.foo.com", "view": "default"}, "object_type":`  
`"record:a", "unique_id": "89314c3fae2841f49600e1b686b0c7b7"},{"_ref":`  
`"db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDI:183566281%3A21", "last_sequence_id":`  
`"183566281:21"},`

- NIOS returns deleted objects as synthetic deleted objects. To get updates on deleted host objects:

`curl -s -k1 -u admin:infoblox -H content-type:application/json -X GET`  
`https://10.34.19.220/wapi/v2.5/db_objects?start_sequence_id=1207501969:0\&object_types`  
`=record:host,bulkhost,record:host_ipv4addr,record:host_ipv6addr\&exclude_deleted=false`

The response is as follows:

`[{ "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDM2YQ:130",`  
`        "object": {`  
`            "_ref": "deleted_objects/Li5kZWxldGVkX29iamVjdHMkMA",`  
`            "object_type": "record:host_ipv6addr"`  
`        },`  
`        "object_type": "deleted_objects",`  
`        "unique_id": "f7d87ec4b9204e16a3d14bfb340c402d" },`  
`{ "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDM2Yg:130",`  
`        "object": {`  
`           "_ref": "deleted_objects/Li5kZWxldGVkX29iamVjdHMkMQ",`  
`           "object_type": "record:host_ipv4addr" },`  
`        "object_type": "deleted_objects",`  
`        "unique_id": "68316853600f41f083e2be134628ce62" },`  
`{ "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDM2Yw:130",`  
`        "object": {`  
`           "_ref": "deleted_objects/Li5kZWxldGVkX29iamVjdHMkMg",`  
`           "object_type": "record:host" },`  
`        "object_type": "deleted_objects",`  
`        "unique_id": "7a5e0622e9db441caa47c12ca30700d5" },`  
`{ "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDM2ZA:1207501969%3A130",`  
`        "last_sequence_id": "1207501969:130" }]`

- To dump incremental synchronization updates into a file using `fileop-&gt;read` operation when the updated objects are large in number, you can specify` _object=db_objects` and all the necessary parameters for incremental synchronization:

`curl -k1 -u admin:infoblox -X POST 'https://10.34.19.100/wapi/v2.5/fileop?_function=read' -H 'Content-Type: application/json; charset=UTF-8' -d '{"_output_location": "LOCAL", "_object": "db_objects", "start_sequence_id" : "1973553522:0","all_object_types_supported_in_version": "2.5", "_max_results": 1000000,"_encoding": "JSON"}'`

For more information about supported objects in the Infoblox API and Restful API, refer to the Infoblox API Documentation and the Infoblox WAPI Documentation.
