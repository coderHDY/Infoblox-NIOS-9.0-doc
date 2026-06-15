---
title: "Delegation Name Server Group"
source: "/space/nios90/280661725"
pageId: "280661725"
---
| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-delegationnsgroup | String | Yes |  |  | Identifies the first row as a header row for the delegation name server group objects. Example: DelegationNsGroup. |
| group_name | String | Yes | Name |  | Indicates the name of the delegation name server group. Example: ns_group1 |
| _new_group_name | String | No |  |  | You can overwrite the group name. |
| delegate_to | String/IP Address | Yes | Name Server/ Address |  | List of name servers with valid IP address.   Example: “foo.com/1.1.1.1” |
| comment | String | No | Comment | Comment | Example: This is a delegation name server group. |
