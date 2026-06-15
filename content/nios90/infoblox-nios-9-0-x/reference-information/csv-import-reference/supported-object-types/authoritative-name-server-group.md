---
title: "Authoritative Name Server Group"
source: "/space/nios90/280402114"
pageId: "280402114"
---
| **Field** **Name** | **Data** **Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage** **and** **Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-NsGroup | String | Yes |  |  | Identifies the first row as a header row for the authoritative name server group objects.    Example: AuthoritativeNsGroup. |
| group_name | String | Yes |  |  | Indicates the name of the authoritative name server group. Example: ns_group1 |
| _new_group_name | String | No |  |  | You can overwrite the group name. |
| grid_primaries | Grid member list and stealth state | No | Grid Primary/ Stealth | primary stealth | List of primary servers of the name server group. The valid format is: "hostname/stealth"    Example: "foo.localadmin/False,[corp1.com/True](http://corp1.com/True),..." |
| external_primaries | Server list | No | External Primary | primary | List of external primary servers. The valid format is: name/ip/stealth/use_2x_tsig/use_tsig/ tsig_name/tsig_key. Only name and IP address are required. If **stealth** is not specified, **use_2x_tsig** and **use_tsig** are used and the default value is set to **False** . Example: "[ext1.test.com/1.1.1.1/FALSE](http://ext1.test.com/1.1.1.1/FALSE),.." |
| external_secondaries | Server list | No | External Secondary | secondaries | List of external secondary servers. The valid format is: name/ip/stealth/use_2x_tsig/use_tsig/tsig_ name/tsig_key. Only name and IP address are required. Default values are assumed for **stealth**, **use_2x_tsig** and **use_tsig**. If either **use_2x_tsig** or **use_tsig** is **True**, then **tsig_name** and **tsig_key** are required.    Example: "[sec1.com/1.1.1.1/FALSE/FALSE/FALSE/foo/](http://sec1.com/1.1.1.1/FALSE/FALSE/FALSE/foo/) sdfsdf86ew,.." |
| grid_secondaries | Member server list | No | Grid Secondary | secondaries | List of Grid secondary servers. The valid format is: hostname/stealth/lead/grid_replicate.    Only hostname is required. The appliance assumes default value for **stealth.** Values are not specified for **lead** and **grid_replicate** fields. Example: "member1.localdomain/FALSE/TRUE/FALSE," |
| is_grid_default | Boolean | No |  |  | Set this to **True** to set this name server group as Grid default, set to **False** to unset this name server group as Grid default. Example: False |
| comment | String | No | Comment | comment | Example: This is a authoritative name server group. |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | String | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: John. |
