---
title: "ACES in Named ACLs"
source: "/space/nios90/280759132"
pageId: "280759132"
---
You can add or overwrite ACEs in an existing named ACL. When you add or modify ACEs in a named ACL, you must have one of the following categories in each entry: IP address, TSIG key based ACE, or a nested named ACL. A combination of these in an entry will generate an error.

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-namedaclitem | String | Yes |  | ACL item | Example: namedaclitem |
| parent | String | Yes | Named ACL | nacl | This is the existing named ACL.   Example: nacl1 |
| address | String | No | IPv4 Address   IPv6 Address | ipv4addr   ipv6addr | This field includes required information for IP address based ACEs. Use forward slashes as the delimiter to separate permission, address, and netmask.   Example: “10.0.0.1/24/Allow” |
| _new_address | String | No |  |  | Add this field to overwrite the address field when you use the overwrite or merge option. |
| tsig_key | String | No | TSIG Key | TSIGKEY | This field includes required information or TSIG key based ACEs. Use forward slashes as the delimiter to separate tsig_key_name, tsig_key, tsig_key_alg, and use_2x_tsig_key.   Example:   “key_1/ny/bY2Da8Lj+2YZ4dYEJLQ==/HMAC-SHA256/false” |
| _new_tsig_key | String | No |  |  | Add this field to overwrite the tsig_key field when you use the overwrite or merge option. |
| defined_acl | String | No | Named ACL | nacl | This field adds a named ACL as a nested ACL to an existing named ACL.   Example: nacl2 |
| _new_named_acl | String | No |  |  | Add this field to overwrite the named_acl field when you use the overwrite or merge option. |
| comment | String | No | Comment | comment | Add this field to overwrite the comment you entered for the name ACL. |

# Adding an IP address based ACE to an existing named ACL

This example shows how to import an IP address based ACE to nacl1. You must include the following information in the address field: address/netmask/permission. The appliance append the ACE to the end of the ACL. Ensure that you validate the ACL after the import.

`Header-namedaclitem,parent*,address namedaclitem,N1,10.0.38.230/ALLOW namedaclitem,N1,172.0.0.0/8/ALLOW`

# Adding a TSIG key based ACE to an existing named ACL

This example shows how to import a TSIG key based ACE to nacl1. You must include the following information in the tsig_key field: tsig_key_name/tsig_key/tsig_key_alg/use_2x_tsig_key. The appliance append the ACE to the end of the ACL. Ensure that you validate the ACL after the import.

`Header-namedaclitem,parent*,tsig_key nmaedaclitem,"nacl1","key_1/bY2Da8Lj+2YZ4dYEJLQ==/HMAC-SHA256/false"`

# Adding a nested named ACL to an existing named ACL

This example shows how to import a nested named ACL nacl2 to the parent named ACL nacl1. The appliance append the nested ACL to the end of the ACL. Ensure that you validate the ACL after the import.

`Header-nmaedaclitem,parent*,defined_acl namedaclitem,"nacl1","nacl2"`

# Adding and overwriting multiple ACEs

This example shows how to add new ACEs and modify existing ACEs. Ensure that you validate the ACL after the import.

`Header-namedaclitem,parent*,address,_new_address,tsig_key,_new_tsig_key,defined_acl,`  
` _new_acl naemdaclitem,"nacl1","Allow/10.0.0.1/24","Deny/10.0.0.1/24",,,,`  
` namedaclitem,"nacl1",,,"key_1/bY2Da8Lj+2YZ4dYEJLQ==/HMAC-SHA256/false",,, namedaclitem,"nacl1",,,,,,"acl2"`
