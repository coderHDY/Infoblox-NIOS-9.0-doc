---
title: "Forward or Stub Server Name Server Group"
source: "/space/nios90/280759587"
pageId: "280759587"
---
| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-ForwardStub ServerNsGroup | String | Yes |  |  | Identifies the first row as a header row for the forward/stub server name server group objects. Example: ForwardStubServerNsGroup. |
| group_name | String | Yes | Name | name | Indicates the name of the forward/stub server name server group. Example: ext_ns_group1 |
| _new_group_name | String | No |  |  | You can overwrite the group name. |
| comment | String | No | Comment | comment | Example: This is a forward/stub server name server group. |
| external_servers | External server list | Yes |  | external_servers | List of external servers. |
| EA-XXX | String | No | Extensible attribute | extensible_attributes | EA-XXX is an example of a user defined attribute. You can ad |
