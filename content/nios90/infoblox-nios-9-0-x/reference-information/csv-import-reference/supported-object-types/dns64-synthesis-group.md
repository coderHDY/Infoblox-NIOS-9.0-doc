---
title: "DNS64 Synthesis Group"
source: "/space/nios90/280661539"
pageId: "280661539"
---
You can import the name of a named ACL in the fields that support named ACLs, such as clients, mapped, and exclude.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-Dns64Synthesis   Group | String | Yes |  |  | Example: Dns64SynthesisGroup |
| name | String | Yes | Name | name | Example: group1 |
| prefix | IPv6 network | Yes | Prefix | prefix | Example: 64:FF9B::/96 |
| comment | String | No | Comment | comment |  |
| clients | Access control list | No | Name | clients | Valid values are IPv4 and IPv6 addresses and networks only. The default value is ‘Any’. Example: 2000::/64/AllowNote that you can import the name of a named ACL in this field. |
| mapped | Access control list | No | Mapped IPv4   Address → Name | mapped | Valid values are IPv4 addresses and networks only. The default value is ‘Any’. Example: 10.0.0.0/8/AllowNote that you can import the name of a named   ACL in this field. |
| exclude | Access control list | No | Excluded IPv6   Address → Name | exclude | Valid values are IPv6 addresses and networks only. The default is ‘None’. Example: 2000::/AllowNote that you can import the name of a named ACL in this field. |
| disabled | Boolean | No | Disabled | disable | Example: FALSE |

# Examples

This section contains examples of how to create data files for DNS64 synthesis groups. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a DNS64 Synthesis Group

This example shows how to import a DNS64 Synthesis Group.

`header-Dns64SynthesisGroup,name*,prefix*,mapped Dns64SynthesisGroup,DNS64Group1,64:FF9B::/96,10.0.0.0/8/Allow`

## Overwriting DNS64 Synthesis Group Data

This example shows how to overwrite the mapped IPv4 address of a DNS64 synthesis group.

`header-Dns64SynthesisGroup,name*,prefix*,mapped Dns64SynthesisGroup,DNS64Group1,64:FF9B::/96,10.1.1.0/24/Allow`

## Adding Named ACL Data

This example shows how to add the name of a named ACL to the mapped address of a DNS64 synthesis group.

`header-Dns64SynthesisGroup,name*,prefix*,mapped Dns64SynthesisGroup,DNS64Group1,My_Named_ACL`
