---
title: "Forwarding Member Name Server Group"
source: "/space/nios90/280269157"
pageId: "280269157"
---
| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-ForwardingM emberNsGroup | String | Yes |  |  | Identifies the first row as a header row for the forwarding member name server group objects. Example: ForwardingMemberNsGroup. |
| group_name | String | Yes | Name | name | Indicates the name of the forwarding member name server group. Example: fwd_ns_group1 |
| _new_group_name | String | No |  |  | You can overwrite the group name. |
| comment | String | No | Comment | comment | Example: This is a forwarding member name server group. |
| forwarding_servers | Forwarding members list | Yes | Edit-Per-Member Forwarders Editor | forwarding_servers | List of forwarding servers per Grid member. Example: False/True/infoblox.localdomain/[test/2.2.2.2],  where:  - False indicates the **Use Forwarders Only** checkbox is not selected.  - True indicates the **Override Default Forwarders** checkbox is selected.  - test/2.2.2.2 - Custom forwarders  **Note**: You cannot clear the custom forwarders using the CSV import operation. |
| EA-XXX | String | No | Extensible attribute | extensible_attributes | EA-XXX is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: John. |
