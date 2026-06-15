---
title: "Stub Member Name Server Group"
source: "/space/nios90/280402061"
pageId: "280402061"
---
| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-StubMember NsGroup | String | Yes |  |  | Identifies the first row as a header row for the stub member name server group objects.    Example: StubMemberNsGroup. |
| group_name | String | Yes | Name | name | Indicates the name of the stub member name server group. Example: stub_ns_group1 |
| _new_group_name | String | No |  |  | You can overwrite the group name. |
| comment | String | No | Comment | comment | Example: This is a stub member name server group. |
| stub_members | Member server list | Yes |  | stub_members | List of stub Grid members. |
| EA-XXX | String | No | Extensible attribute | extensible_attributes | EA-XXX is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: John. |
