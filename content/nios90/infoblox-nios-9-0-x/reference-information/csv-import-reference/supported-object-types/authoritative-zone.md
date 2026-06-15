---
title: "Authoritative Zone"
source: "/space/nios90/280269224"
pageId: "280269224"
---
You can import the name of a named ACL in the fields that support named ACLs, such as allow_transfer, allow_query, and allow_update.

> **warning**
>
> ### Note
> 
> - IDN is supported for object types: fqdn, soa_mname, and soa_email. You can use punycode or IDNs while importing these objects.
> - To delete a parent zone and the associated subzones, you must add **remove-subzones** column to the CSV export file and set the value to **True**. If you want to delete only the parent zone, then you must set this column value to **False**.

| **Field Name** | **Data Type** | **Required**   **(Yes/No)** | **Associated **   **GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-AuthZone | String | Yes |  |  |  |
| fqdn | FQDN | Yes | Name | name | Example: test.com |
| zone_format | String | Yes |  |  | Valid values are FORWARD, IPV4,and IPV6 |
| view | String | No |  |  | If no view is specified, the Default view is used. |
| prefix | String | No |  |  | Prefix is used for reverse-mapping RFC2317 zones only. If you include a prefix in a forward-mapping zone, the appliance ignores the prefix. No error message is generated. |
| _new_prefix | String | No |  |  | Add this field to overwrite the prefix field when you select the overwrite or merge option.Use the hostname of the grid member in this field. Example: infoblox.localdomain |
| is_multimaster | Boolean | No | Multi-master | is_multimaster | Indicates whether the zone has multiple primary servers.    Example: True |
| grid_primaries | Grid member list and stealth state | No | Grid Primary/Stealth | primary  stealth | Data must be in the following format: "hostname/stealth"    Example: "foo.localadmin/False,corp1.com/True,..." |
| external_primaries | Server list | No | External Primary | primary | Data must be in the following format: "name/ip/stealth/use_2x_tsig/ use_tsig/tsig_name/tsig_key/ tsig_key_algorithm".    Only name and ip are required fields. If no value is specified for stealth, use_2x_tsig, and use_tsig, the default value FALSE is used. If either use_2x_tsig or use_tsig is TRUE, tsig_name and tsig_key are required. If no value is specified for tsig_key_algorithm, the default value is HMAC-MD5. If both use_2x_tsig and use_tsig are TRUE, only use_tsig = TRUE and the tsig key name and key are imported.    Example: "ext1.test.com/1.1.1.1/FALSE" |
| grid_secondaries | Member server list | No | Grid    Secondary | secondaries | Data must be in the following format: "hostname/stealth/lead/grid_ replicate". Only hostname is required. If you do not specify values for stealth, lead, and grid_replicate, the default value FALSE is used. Example: "member1.localdomain/FALSE/TRUE/FALSE" |
| external_secondaries | Server list | No | External Secondary | secondaries | Data must be in the following format: "name/ip/stealth/use_2x_tsig/use_tsig/tsig_name/tsig_key/tsig_key_algorithm". Only name and ip are required fields. If no value is specified for stealth, use_2x_tsig, and use_tsig, the default value FALSE is used. If either use_2x_tsig or use_tsig is TRUE, tsig_name and tsig_key are equired. If no value is specified for tsig_key_algorithm, the default value is HMAC-MD5. If both use_2x_tsig and use_tsig are TRUE, only use_tsig = TRUE and the tsig key name and key are imported. Example: "sec1.com/1.1.1.1/FALSE/FALSE/FALSE/foo/sdfssdf86ew" |
| ns_group | String | No | Name server group | ns_group | Authoritative name server group name. Example: name-ns-group1 |
| comment | String | No | Comment | comment |  |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| create_underscore_zones | Boolean | No | Automatically create underscore zones | create_underscore_zones | Example: FALSE |
| allow_active_dir | List of IP addresses | No | Allow unsigned updates from these domain controllers | enable_ad_server | The Valid value is a list of IP addresses.   Example: “1.1.1.1, 10.0.0.1 |
| soa_refresh | Unsigned integer | No | Refresh | soa_refresh | When you modify this field to override an inherited value, you must include values for all SOA timer fields. The appliance updates all the SOA timers when you update any of them. |
| soa_retry | Unsigned integer | No | Retry | soa_retry | Ensure that you include this field when you override the soa_refresh field. |
| soa_expire | Unsigned integer | No | Expire | soa_expire | Ensure that you include this field when you override the soa_refresh field. |
| soa_default_ttl | Unsigned integer | No | Default TTL | soa_default_ttl | Ensure that you include this field when you override the soa_refresh field. |
| soa_negative_ttl | Unsigned integer | No | Negative-caching TTL | soa_negative_ttl | Ensure that you include this field when you override the soa_refresh field. |
| soa_mnames | FQDN list | No | List of SOA MNAME fields | soa_mname | Data must include the FQDN and hostname   Example: “foo.localdomain/foobar.localadmin,...” |
| soa_email | Email address | No | Email address for SOA MNAME field | soa_email | Example: root@ |
| soa_serial_number | Unsigned integer | No | Serial Number | soa_serial_number |  |
| disable_forwarding | Boolean | No | Don’t use forwarders... | disable_forwarding | Example: TRUE |
| allow_update_forwarding | Boolean | No | Allow updates from | forward_to | Example: FALSE |
| update_forwarding | ACL | No | Allow updates from...   Permission table | forward_to | Data must be in the following formats: ip address/permissionnetwork/network cidr/permissionANY/permissionTSIG-XXX/permission  Permission can be ALLOW or DENY    If the first value is not Any or TSIG-, it is assumed to be an IP or network address.   Example: "10.0.0.10/Allow,11.0.0.0/16/Deny,TSIG-foo/sdfdsfwhsdgfsw8sdf/Allow |
| allow_transfer | ACL | No | Allow zone transfers to | allow_transfer | Example: "12.0.0.12/Deny,1234::/64/Allow"   Note that you can import the name of a named ACL in this field. |
| allow_update | ACL | No | Allow updates from | allow_update | Example: “13.0.0.0/8/Allow”   Note that you can import the name of a named ACL in this field. |
| allow_query | ACL | No | Allow queries from | allow_query | Example: “127.0.0.1/Allow”   Note that you can import the name of a named ACL in this field. |
| notify_delay | Unsigned integer | No |  | notify_delay | This field specifies the seconds of delay the notify messages are sent to the secondaries. The valid value is between 5 and 86400 seconds.Example: 10 |
| EA-Site | String | No | Extensible attribute | extensible_attributes | EA-Site is an example of a predefined extensible attribute. You can add other predefined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| EA-Users | List | No | Extensible attribute | extensible_attributes | EA-Users is an example of a user defined attribute. You can add other user defined attributes to the data file. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| ADMGRP-JoeSmith | String | No | Permissions   Admin    Group/Role |  | ADMGRP-JoeSmith is an example of an admin permission of a specific admin group. For information about data format and examples, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |

# Examples

This section contains examples of how to create data files for DNS zones. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding DNS Zones

This example shows how to add a forward mapping zone, corp100.com, with a Grid primary and a Grid secondary, where the grid secondary = hostname/stealth/lead/grid_replicate.

`header-authzone,fqdn*,zone_format*,comment,grid_secondaries`  
`authzone,corp100.com,FORWARD,USA,member.infoblox.com/False/ False3`

This example shows how to create a data file to add an IPv4 reverse mapping zone, 100.0.0.0/8, with a Grid primary and an external secondary, where the external secondary = name/ip/stealth/use_2x_tsig/use_tsig/ tsig_name/tsig_key.

`header-authzone,fqdn*,zone_format*,external_secondaries`  
`authzone,100.0.0.0/8,IPV4,ns2.com/2.2.2.2/False/False/False/None/None`

This example shows how to create a data file to add an IPv6 reverse-mapping zone, 1234::/64, with an external primary and a Grid secondary, where the external primary = name/ip/stealth/use_2x_tsig/use_tsig/ tsig_name/tsig_key.

`header-authzone,fqdn*,zone_format*,external_primaries,grid_secondaries`  
`authzone,1234::/64,IPV6,ns1.com/1.1.1.1/False/False/False/None/None, member.infoblox.com/False/False/False`

## Overwriting DNS Zone Data

This example shows how to overwrite a comment from "USA" to "Japan" and remove the Grid secondary.

`header-authzone,fqdn*,zone_format*,comment,grid_secondaries`  
`authzone,corp100.com,FORWARD,Japan`

## Merging DNS Zone Data

This example shows how to merge the extensible attribute "Site" = "HQ" and add the RW permission to an admin group "DNS_admins".

`header-authzone,fqdn*,zone_format*,ADMGRP-DNS_admins,EA-site`  
`authzone,corp100.com,FORWARD,RW,HQ`

This example shows how to add an external secondary with these values: "ns3.com/2.2.2.2/False/False/False/None/None".

`header-authzone,fqdn*,zone_format*,external_secondaries`  
`authzone,100.0.0.0/8,IPV4,ns2.com/2.2.2.2/False/False/False/None/None,ns3.com/2.2.2.2/ False/False/False/None/None`

## Adding Named ACL Data

This example shows how to import the names of named ACLs in supported fields, such as allow_transfer, allow-query, and allow_update:

`Header-authzone,fqdn*,grid_primary,view,external_secondaries,allow_transfer,allow_quer y,zone_type,allow_active_dir,allow_update,zone_format,notify_delay,disabled,grid_prima ry_stealth,soa_negative_ttl,soa_mname,soa_default_ttl,soa_retry,,create_underscore_zon es,soa_serial_number,soa_email,comment,soa_expire,soa_refresh`  
` authzone,test_data_export.com,infoblox.localdomain,default,test_data.infoblox.com/1.1. 1.1/TRUE,"12.0.0.12/Deny,1234::/64/Allow",My_Named_ACL,Authoritative,1.2.3.4,"1234::/6 4/Allow",FORWARD,100,FALSE,FALSE,100,mname2,300,600,FALSE,FALSE,1,soaemail@infoblox.c (mailto:%2CFORWARD%2C100%2CFALSE%2CFALSE%2C100%2Cmname2%2C300%2C600%2CFALSE%2CFALSE%2C1%2Csoaemail@infoblox.co)o m,Authzone2,200,500`  
` authzone,test_csv_export.com,infoblox.localdomain,default,test_csv.infoblox.com/1.1.1. 1/TRUE,My_Named_ACL,"12.0.0.12/Deny,1234::/64/Allow",,2.3.4.5,"4321::/64/Allow",FORWAR`  
` D,100,FALSE,FALSE,400,mname1,900,800,FALSE,FALSE,1,tel@infoblox.com,Authzone1,100,200`
