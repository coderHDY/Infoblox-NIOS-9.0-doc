---
title: "Best Practices for Object Change Tracking"
source: "/space/nios90/1471219429"
pageId: "1471219429"
---
- The Object Change Tracking feature is optimized to reduce impact on the DDI services and it runs only on the Grid Master. The synchronization process synchronizes 1000 objects at a time with a 2 second pause in between. There might be a slight impact on the Grid Master Candidate as they get updates from the Grid Master. When protocol services are running on the Grid Master Candidate you might encounter a 5% drop in the protocol performance. This feature does not impact the services that are running on the Grid members.
- NIOS does not update the sequence ID of the respective parent when you modify a child object. For example, inserting an A record under DNS zone does not increase the sequence number of the zone object.
- When you delete a parent object, NIOS saves the child objects in the deleted object table. But, if the associated child objects are either resource records or leases, NIOS will neither save them in the deleted object table nor update the sequence ID for these child objects.
- If you update a parent object, then the sequence ID of its child objects will not change.
- NIOS updates the sequence ID of the host record and IPv4 and IPv6 host addresses, if there are any changes to host addresses, both IPv4 and IPv6. The sequence ID is also updated when you update the host alias records that results in increase in the sequence ID of the host record and all its child objects.

For example, if you create a host record [hhh.test.com](http://hhh.test.com) with an IPv4 address and perform an incremental  
synchronization to get updates, the response contains an updated host record and host address:



`curl -k1 -u admin:infoblox -H content-type:application/json -X GET`  
`https://10.32.2.202/wapi/v2.5/db_objects?start_sequence_id=2830689052:0\&object_types=`  
`record:host,record:host_ipv4addr\;_return_fields=last_sequence_id,object,object_type\;`  
`_return_type=json-pretty`

The response is as follows:

`[`  
`    {`  
`        "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDIw:38",`  
`        "object": {`  
`           "_ref": "record:host/ZG5zLmhvc3QkLl9kZWZhdWx0LmNvbS5rYXJqYWdpLmhvc3Qx:`  
`hhh.test.com/default",`  
`           "ipv4addrs": [`  
`               {`  
`                  "_ref":`  
`"record:host_ipv4addr/ZG5zLmhvc3RfYWRkcmVzcyQuX2RlZmF1bHQuY29tLmthcmphZ2kuaG9zdDEuMS4x`  
`LjEuMS4:1.1.1.1/ hhh.test.com/default",`  
`                 "configure_for_dhcp": false,`  
`                 "host": " hhh.test.com",`  
`                 "ipv4addr": "1.1.1.1",`  
`                 "mac": "11:11:11:11:11:11"`  
`               }`  
`           ],`  
`           "ipv6addrs": [`  
`               {`  
`                 "_ref":`  
`"record:host_ipv6addr/ZG5zLmhvc3RfYWRkcmVzcyQuX2RlZmF1bHQuY29tLmthcmphZ2kuaG9zdDEuYWE6`  
`OmFhLg:aa%3A%3Aaa/ hhh.test.com/default",`  
`                 "configure_for_dhcp": false,`  
`                 "host": " hhh.test.com",`  
`                 "ipv6addr": "aa::aa"`  
`               }`

`           ],`  
`           "name": " hhh.test.com",`  
`           "view": "default"`  
`     },`  
`     "object_type": "record:host",`  
`     "unique_id": "c326fcf8058c4022939050af96a0fdb2"`  
`  },`  
`  {`  
`     "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDIx:38",`  
`     "object": {`  
`          "_ref":`  
`"record:host_ipv6addr/ZG5zLmhvc3RfYWRkcmVzcyQuX2RlZmF1bHQuY29tLmthcmphZ2kuaG9zdDEuYWE6`  
`OmFhLg:aa%3A%3Aaa/ hhh.test.com/default",`  
`          "configure_for_dhcp": false,`  
`          "host": " hhh.test.com",`  
`          "ipv6addr": "aa::aa"`  
`      },`  
`      "object_type": "record:host_ipv6addr",`  
`      "unique_id": "2b19a399c3f747538d879fdd33a4de32"`  
`  },`  
`  {`  
`      "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDIy:38",`  
`      "object": {`  
`           "_ref":`  
`"record:host_ipv4addr/ZG5zLmhvc3RfYWRkcmVzcyQuX2RlZmF1bHQuY29tLmthcmphZ2kuaG9zdDEuMS4x`  
`LjEuMS4:1.1.1.1/ hhh.test.com/default",`  
`          "configure_for_dhcp": false,`  
`          "host": " hhh.test.com",`  
`          "ipv4addr": "1.1.1.1",`  
`          "mac": "11:11:11:11:11:11"`  
`      },`  
`      "object_type": "record:host_ipv4addr",`  
`      "unique_id": "3fb8fba003d647ceac5796a28459725a"`  
`   },`  
`   {`  
`      "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDIz:3956302770%3A38",`  
`      "last_sequence_id": "3956302770:38"`  
`   }`  
`]`

- When you update DNS host, host address, and host alias, NIOS updates the sequence IDs of child objects associated with these parent objects even though the changes do not affect the child objects. For example, when you update an existing comment in the host record, NIOS updates the sequence IDs of child objects associated with the respective host record.  
  Example:

`curl -k1 -u admin:infoblox -H content-type:application/json -X GET`  
`https://10.32.2.202/wapi/v2.5/db_objects?start_sequence_id=2830689052:0\&object_types=`  
`record:host,record:host_ipv4addr\;_return_fields=last_sequence_id,object,object_type,o`  
`bject.comment\;_return_type=json-pretty`

The response is as follows:

`[`  
`     {`  
`          "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDI:27",`  
`          "object": {`  
`              "_ref":`  
`"record:host/ZG5zLmhvc3QkLl9kZWZhdWx0LmNvbS50ZXN0LmhoaA:hhh.test.com/default",`  
`              "comment": "hi"`  
`           },`  
`           "object_type": "record:host"`  
`           "unique_id": "1ab6c989d8fd454ca06ffac6ac600fe6"`  
`     },`  
`     {`  
`           "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDM:27",`  
`           "object": {`  
`               "_ref":`  
`"record:host_ipv4addr/ZG5zLmhvc3RfYWRkcmVzcyQuX2RlZmF1bHQuY29tLnRlc3QuaGhoLjEuMC4wLjEu`  
`:1.0.0.1/hhh.test.com/default",`  
`              "configure_for_dhcp": false,`  
`              "host": "hhh.test.com",`  
`              "ipv4addr": "1.0.0.1"`  
`           },`  
`           "object_type": "record:host_ipv4addr"`  
`           "unique_id": "1ab6c989d8fd454ca06ffac6ac600fe7"`  
`     },`  
`     {`  
`           "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDQ:2830689052%3A27",`  
`           "last_sequence_id": "2830689052:27"`  
`     }`

- When an IPv4 or an IPv6 host address changes, NIOS deletes the old record and creates a new record with the updated IP address. Note that new sequence IDs are generated for the associated objects. When you query a host record, NIOS displays the list of host addresses associated with it.

Example:

`curl -k1 -u admin:infoblox -H content-type:application/json -X GET`  
`https://10.32.2.202/wapi/v2.5/db_objects?start_sequence_id=2830689052:0\&object_types=`  
`record:host,record:host_ipv4addr\;_return_fields=last_sequence_id,object,object_type\;`  
`_return_type=json-pretty`

The response is as follows:

`[`  
`     {`  
`           "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDA:28",`  
`           "object": {`  
`               "_ref":`  
`"record:host/ZG5zLmhvc3QkLl9kZWZhdWx0LmNvbS50ZXN0LmhoaA:hhh.test.com/default",`

`               "ipv4addrs": [`  
`                   {`  
`                     "_ref":`  
`"record:host_ipv4addr/ZG5zLmhvc3RfYWRkcmVzcyQuX2RlZmF1bHQuY29tLnRlc3QuaGhoLjEuMC4wLjIu`  
`:1.0.0.2/hhh.test.com/default",`  
`                     "configure_for_dhcp": false,`  
`                     "host": "hhh.test.com",`  
`                     "ipv4addr": "1.0.0.2"`  
`                   }`  
`               ],`  
`               "name": "hhh.test.com",`  
`               "view": "default"`  
`       },`  
`       "object_type": "record:host"`  
`       "unique_id": "1ab6c989d8fd454ca06ffac6ac600fe6"`  
`   },`  
`   {`  
`        "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDE:28",`  
`        "object": {`  
`             "_ref": "deleted_objects/Li5kZWxldGVkX29iamVjdHMkMA",`  
`             "object_type": "record:host_ipv4addr",`  
`           "unique_id": "68cad3406a244aa0b34b3ea3be383598"`  
`        },`  
`        "object_type": "deleted_objects"`  
`        "unique_id": "1ab6c989d8fd454ca06ffac6ac600fe4"`  
`    },`  
`    {`  
`        "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDI:28",`  
`        "object": {`  
`            "_ref":`  
`"record:host_ipv4addr/ZG5zLmhvc3RfYWRkcmVzcyQuX2RlZmF1bHQuY29tLnRlc3QuaGhoLjEuMC4wLjIu`  
`:1.0.0.2/hhh.test.com/default",`  
`            "configure_for_dhcp": false,`  
`            "host": "hhh.test.com",`  
`            "ipv4addr": "1.0.0.2"`  
`         },`  
`         "object_type": "record:host_ipv4addr"`  
`         "unique_id": "1ab6c989d8fd454ca06ffac6ac600fe9"`  
`    },`  
`    {`  
`         "_ref": "db_objects/Li5hbGxfY2hhbmdlZF9vYmplY3RzJDM:2830689052%3A28",`  
`         "last_sequence_id": "2830689052:28"`  
`    }`

- NIOS returns the shared records per zone when you query for them. For example, consider two zones, z1 and z2, and a shared record group, srg1, which contains a shared record sr1. The shared record group srg1 is associated with the zones z1 and z2. Hence, the shared record sr1 is shared between two zones, z1 and z2, but NIOS saves only a single copy of the shared record sr1 in the database. When you query for shared record updates, NIOS returns two records for z1 and z2, as sr1 is associated with both the zones, z1 and z2, and saves these records with a UUID and a sequence ID in the table. The response also contains new records with zone pointing to the zone it belongs to, UUID and sequence ID of the new records and a `shared_record_grou`p, which indicates that it is a shared record and not a normal resource record. When you enable Object Change Tracking feature, NIOS clears this table and recreates a new table for the existing shared records.

- Note that NIOS generates two leases in the database when a client sends a DHCP request to the NIOS DHCP server, which is configured with failover association. You can perform either a full or an incremental synchronization in this scenario. Infoblox recommends that you ignore the lease that is generated by the failover DHCP server with `binding_state` as `BACKUP` and consider the lease with `binding_state` as `ACTIVE`.
- File distribution service automatically removes old files from `wapi_output` directory if there is no sufficient space for new files. NIOS allocates 50% each of the file distribution area to `wapi_output` directory and normal files. For example, if the file distribution area is allocated 500 MB, then 250 MB is used for `wapi_output` directory and the remaining 250 MB is used for normal files.
- NIOS does not support WAPI paging mechanism. As the synchronization results are displayed in the order of `sequence_id`, you must `specify _max_results` to achieve paging mechanism for synchronization.

- NIOS deletes all previous scheduled tasks after a restore or an upgrade operation.
