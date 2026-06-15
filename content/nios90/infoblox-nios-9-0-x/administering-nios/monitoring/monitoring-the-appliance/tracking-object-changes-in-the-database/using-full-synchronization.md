---
title: "Using Full Synchronization"
source: "/space/nios90/1471219458"
pageId: "1471219458"
---
Full synchronization synchronizes the entire set of objects irrespective of updates. You can perform a full synchronization only on the Grid Master and Grid Master Candidate. Note that the tasks created on the Grid Master and Grid Master Candidates will be executed on them respectively and you can download the synchronized data on to the member where the task was created. The Grid Master Candidate can execute only read-only tasks. To save the output of a full synchronization, you must specify the output location. The output of a full synchronization is in the following formats: JSON, XML, ROWJSON, or ROWXML.  
You can specify one of the following output locations: `"FILE_DISTRIBUTION"` and `"LOCAL".`

- When `_output_location = "FILE_DISTRIBUTION"`

When you set the output location as mentioned above, you must specify a file name or a prefix for the file. NIOS saves the output file in the file distribution area and displays an error message if you do not specify a file name or a prefix. For more information about file distribution area, see [*Managing Directories*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/file-distribution-services/managing-directories).  
When you select the above output location for a Grid Master Candidate, you must select **Allow** **Upload** **to** **Grid** **Members** to upload files to the file distribution area. Infoblox recommends that you use the Grid Master Candidate to offload the Grid Master. You must enable a full synchronization during off-peak hours if protocol services are running on the Grid Master Candidate. For more information, see [*Managing Files*](/nios90/infoblox-nios-9-0-x/administering-nios/appliance-administration/file-distribution-services/managing-files).

Example:

`curl -k1 -u admin:infoblox -X POST 'https://..../wapi/v2.5/fileop?_function=read' -H 'Content-Type: application/json; charset=UTF-8' -d '{"_filename": "test.json", "_output_location":"FILE_DISTRIBUTION","_object": "db_objects", "all_object_types_supported_in_version": "2.5","_encoding": "ROWJSON"}'`

You can specify either `_object = db_objects` or `all_object_types_supported_in_version=2.5` to retrieve all objects. When you specify` _object = db_objects,` NIOS returns only standard Restful API fields as response. To retrieve all fields of all objects, you can specify `all_object_types_supported_in_version=2.5.` To fetch the output file, start file distribution service and use the following URL:

`curl -k1 -u admin:infoblox -X GET http://&lt;ipaddress&gt;/wapi_output/test.json -H 'Content-Type:application/json'`

- When `_output_location = "LOCAL"`
  
  - If you schedule a full synchronization and set the output location as mentioned above, a file name is generated based on the task ID and the output file is saved at another location. You do not have to specify a file name or a prefix.
  - If you do not schedule a synchronization, then NIOS returns an URL and a token, which is used for the download complete function, in the response.
  - If you do not specify an output location, NIOS saves the file in the file distribution area.
  - Use the above output location for saving full synchronization files when file distribution area does not have enough space for storage.

Example:

`curl -k1 -u admin:infoblox -X POST 'https://127.0.0.1/wapi/v2.5/fileop?_function=read&_schedinfo.schedule_now=true' -H 'Content-Type: application/json; charset=UTF-8' -d '{"_output_location": "LOCAL", "_object": "db_objects", "all_object_types_supported_in_version": "2.5", "_encoding": "JSON"}'`

NIOS saves the output file in the file distribution area if you do not specify an output location as shown in the code below:

`curl -k1 -u admin:infoblox -X POST 'https://..../wapi/v2.5/fileop?_function=read' -H 'Content-Type: application/json; charset=UTF-8' -d '{"_filename": "test.json", "_output_location":"FILE_DISTRIBUTION","_object": "db_objects", "all_object_types_supported_in_version": "2.5","_encoding": "ROWJSON"}'`

Note the following about full synchronization:

- A full synchronization is required initially for a complete snapshot of the database.
- Depending on the size of requested data, a full synchronization may take a longer time to complete. For example, when 1 million objects are requested with all fields on an IB-4015 appliance, full synchronization takes a couple of hours. When 1 million objects are requested with standard RESTful API fields on an IB-4015 appliance, full synchronization takes less than an hour.
- Infoblox recommends that you request only object types with standard RESTful API fields and specify any additional required fields during a full synchronization.
- To dump full synchronization updates into a file using` fileop-&gt;read` operation when the updated objects are large in number, you can specify `_object=db_objects` and all the necessary parameters.
- Infoblox recommends a full synchronization in the following cases:
  
  - After an upgrade, restore or master promotion, which resets the sequence ID.
  - During off-peak hours for busy Grids with high rate of change that is greater than 500/sec.
  - When the maximum time or maximum number to track deleted objects is met, with the default being 4 hours and 4000 objects, then synchronization API returns an error if the last deleted sequence ID is newer than the current sequence ID.

Following are a few samples of API requests for full synchronization:

- If you specify `_output_location = "local"` and schedule the task, then you must use `fileop -&gt;get_file_url` to retrieve the URL:

` curl -k1 -u admin:infoblox -X POST 'https://127.0.0.1/wapi/v2.5/fileop?_function=get_file_url' -H "Content-Type: application/json" -d '{"task_id":1}'`

The response is as follows:

`"url":`  
` "https://10.32.2.202/http_direct_file_io/req_id-OBJECTS-1/nios-db-objects-1.json"`

You can fetch this file using the following API request:

`curl -k1 -u admin:infoblox -X GET https://10.32.2.202/http_direct_file_io/req_id-OBJECTS-1/nios-db-objects-1.JSON -H 'Content-Type: application/json; charset=UTF-8'`

- If you specify `_output_location = "local"` and do not schedule the task, then NIOS returns an URL and a token:

`curl -k1 -u admin:infoblox -X POST 'https://127.0.0.1/wapi/v2.5/fileop?_function=read'`  
` -H 'Content-Type: application/json; charset=UTF-8' -d '{ "_output_location":"LOCAL","_object": "db_objects", "all_object_types_supported_in_version": "2.5","_encoding": "JSON"}'`

The response is as follows:

`{`  
`    "token": `

`"eJy1kU1vwyAMhu/8kfaSD/JB0t5aZZU2Ta3UTtrRSoB2nlJggUztv5+ZtJ123QFk/L7mMUZK6+4w\n6QujTVr jwzTLYCfmOFtKNGc7jPaWWqPjCnenPev60MNRn5krmAQYZhwDGgCmUAbmSrZUrmKnhb45\nnO4Q8KoXzNVsxyt RtKVYFU0qqqpuBWf+tJinkWRBBW8hOL/OMp6nZZ2KtG2ymAKF1FuAM44a0GaT\n/gBUSXd43T8fNl3C85xnBq1 P1AB2eCevT5J8leR1UuRcQFGsy3pN1KfTYU+sJmJRUdQS9a/rSFpF\nk6KnUsxz8mWe5tJfdBau7n/64vyHCdp Iq9BcYrYg+Pbx21D+Gq5WxanyOOhu87KB48Munmvmw9Fx\nET+BNyTi0DtA4+YAn3ryaE20tWzvh/QLT4Gbhw=`  
` =\n",`  
`    "url":`  
` "https://10.35.6.87/http_direct_file_io/req_id-DOWNLOAD-1001/nios-db_objects--09-05-20 `

`16_22:35:27.JSON"`  
` }`

- To save the file in a local area instead of the file distribution area:

`curl -k1 -u admin:infoblox -X POST 'https://127.0.0.1/wapi/v2.5/fileop?_function=read&_schedinfo.schedule_now=true' -H 'Content-Type: application/json; charset=UTF-8' -d '{"_output_location": "LOCAL", "_object": "db_objects", "all_object_types_supported_in_version": "2.5", "_encoding": "JSON"}'`



The response is as follows:

`scheduledtask/b25lLnF1ZXVlZF90YXNrJDE:1/WAITING_EXECUTION`

- You can also schedule a full synchronization task as follows:

`curl -k1 -u admin:infoblox -X POST 'https://127.0.0.1/wapi/v2.5/fileop?_function=read&_schedinfo.schedule_now=true' -H 'Content-Type: application/json; charset=UTF-8' -d '{"_filename": "test2.txt", "_object": "db_objects", "all_object_types_supported_in_version": "2.5", "_encoding": "JSON"}' scheduledtask/b25lLnF1ZXVlZF90YXNrJDE:1/WAITING_EXECUTION`

NIOS returns the scheduled task reference so that you can query and find out when will the scheduled task be complete:

`curl -k1 -u admin:infoblox -X GET `

`https://127.0.0.1/wapi/v2.5/scheduledtask/b25lLnF1ZXVlZF90YXNrJDE:1/WAITING_EXECUTION `

The response is as follows:

`{ "_ref": "scheduledtask/b25lLnF1ZXVlZF90YXNrJDE:1/COMPLETED", "approval_status": "NONE", "execution_status": "COMPLETED", "task_id": 1 }`

Note that the result is in either JSON or XML format. You can fetch the output file from the `wapi-output` directory of the file distribution area when the scheduled task is complete.
