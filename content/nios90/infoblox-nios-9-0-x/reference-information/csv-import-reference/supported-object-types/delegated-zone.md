---
title: "Delegated Zone"
source: "/space/nios90/280402092"
pageId: "280402092"
---
> **warning**
>
> **Note**
> 
> To delete a parent zone and the associated subzones, you must add **remove-subzones** column to the CSV export file and set the value to **True**. If you want to delete only the parent zone, then you must set this column value to **False**.



| **Field**** ****Name** | **Data**** ****Type** | **Required**** ****(Yes/No)** | **Associated**** ****GUI**** ****Field** | **Associated**** ****PAPI**** ****Method** | **Usage**** ****and**** ****Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-DelegatedZone | String | Yes |  |  | Identifies the first row as a header row for delegated zones. Example: DelegatedZone |
| fqdn | FQDN | Yes | Name | zone | This field combines the AAAA record name and the zone name to form the FQDN. Example: aaaa1.corp100.com |
| view | String | No | DNS View | views | If no view is specified, the default view is used. Example: Default |
| zone_format | String | Yes | Type |  | Valid values are **FORWARD**, **IPV4**,and **IPV6**. |
| prefix | String | No | RFC 2317    Prefix | prefix | Prefix is used for reverse-mapping RFC2317 zones only. If you include a prefix in a forward-mapping zone, the appliance ignores the prefix. No error message is generated. |
| disabled | Boolean | No | Disable | disable | Enable or disable the zone. Example: FALSE |
| comment | String | No | Comment | comment | Example: Delegated zone header. |
| delegate_to | Delegated Servers list | Yes |  |  | Example: delegate_server1.test.com/1.1.1.1/, |
| delegated_ttl | Unsigned integer | No |  |  | This is an inherited field. Example: 28800 |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. Example: California. |
| EA-Users | List | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. Example: ['Annie', 'John']. |
| ADMGRP-XXXX | String | No | Permissions Admin Group/Role | permission | ADMGRP-JimSmith is an example of an admin permission of a specific admin group. Example: RW |
| ns_group | String | No | Name server group | ns_group | Authoritative name server group name. Example: name-ns-group1 |
| _new_prefix | String | No |  |  | Add this field to overwrite the prefix field when you select the Overwrite or Merge option. Use the host name of the Grid member in this field. Example: infoblox.localdomain |
| ddns_protected | Boolean | No | Protected |  | Add this field in order to restrict DDNS updates to record. |
| ddns_principal | String | No | Principal |  | Displays the principal name for dynamic records with the GSS-TSIG principal authentication enabled in the advanced updates properties of the Grid, view, zone, or Standalone. |
