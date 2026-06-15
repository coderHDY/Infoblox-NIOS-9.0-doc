---
title: "Network View"
source: "/space/nios90/280792095"
pageId: "280792095"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-NetworkView | String | Yes |  |  | Identifies the first row as a header row for the network view objects. Example: NetworkView |
| name | String | Yes |  |  | Indicates the name of the network view.   Example: net_view1 |
| _new_name | String | No |  |  | Add this field to overwrite the **name** field when you select the **Overwrite** or **Merge** option. |
| comment | String | No | Comment | comment | Example: This is a network view. |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | String | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: John. |
| ADMGRP-XXXX | String | No | Permissions   Admin Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group. Example: RW |
