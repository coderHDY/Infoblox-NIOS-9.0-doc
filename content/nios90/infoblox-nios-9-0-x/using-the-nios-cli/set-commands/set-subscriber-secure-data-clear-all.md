---
title: "set subscriber_secure_data clear_all"
source: "/space/nios90/509477302"
pageId: "509477302"
---
If you have configured Infoblox Subscriber Services, you can use the `set subscriber_secure_data clear_all` command to delete all the subscriber records from the subscriber's cache. Note that only the subscriber records with the K flag are deleted, however the subscriber records with an S flag and without any flag will not be deleted, they remain in the subscriber’s cache.

## Syntax

`Infoblox &gt; set subscriber_secure_data clear_all`

| **Argument** | **Description** |
| --- | --- |
| `clear_all` | Clears all subscriber records from the cache, except static records, i.e., those with the S flag set. |
| `clear_provisioned_devices` | Clears all provisioned subscriber records from the cache i.e., all records with K flag set.[imc_cache_clear is used here, same function is used in GC and there is no change in GC functionality] |
| `clear_non_provisioned_devices` | Clears all non-provisioned subscriber records from the cache i.e., all records without any special flags set A, S or K devices under CPE. |
| `clear_static_devices` | Clears all static subscriber records from the cache i.e., all records with S flag set. |
| `clear_api_devices` | Clears all API subscriber records from the cache i.e., all records with A flag set. |

## Example

`Infoblox &gt; set subscriber_secure_data clear_all`

`Deleted: 1 record`

`Infoblox &gt; set subscriber_secure_data clear_provisioned_devices`  
`Deleted: 1 record`

`Infoblox &gt; set subscriber_secure_data clear_non_provisioned_devices`  
`Deleted: 1 record`

`Infoblox &gt; set subscriber_secure_data clear_static_devices`  
`Deleted: 1 record`

`Infoblox &gt; set subscriber_secure_data clear_api_devices`  
`Deleted: 1 record`

After re-adding the records, the "`set subscriber_secure_data clear_all`" was executed, this deleted all records from the cache except static records.

`Infoblox &gt; set subscriber_secure_data clear_all`  
`Deleted: 3 records`
