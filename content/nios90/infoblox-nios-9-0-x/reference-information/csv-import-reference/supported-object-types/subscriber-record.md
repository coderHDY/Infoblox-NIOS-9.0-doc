---
title: "Subscriber Record"
source: "/space/nios90/280268430"
pageId: "280268430"
---
| **Field Name** | **Data Type** | **Required**   **(Yes/No)** | **Usage and Guidelines** | ** ****Example** |
| --- | --- | --- | --- | --- |
| ip_addr | IP address | Yes | Can be IPv4 or IPv6 | 2002::abcd or 20.20.20.20 |
| prefix | Integer | Yes | - For IPv6, prefix must not be greater than 128 - For IPv4, prefix must not be greater than 32 | - 32 if ip_addr is 20.20.20.20 - 128 if ip_addr is 2002::abcd |
| localid | String | Yes | - Must be a valid hexadecimal string if it is MAC_Addr - Can be N/A if not available | a1b1c1d0e0f0 or N/A |
| ipsd | String | Yes | - Can be N/A if not available - Can be a port number in case of CGNAT support | BLR or NYK |
| flags | String | Yes | - S for static record - B for black and white list support - SB for both static and blacklist and whitelist support | S or B or SB |
| alt_ip_addr | IP address | No | - Must belong to a different type than ip_addr - Prefix can be a part of alt_ip_addr. Only 32 and 128 are supported as prefix values | - 2002::abcd if ip_addr is 20.20.20.20 - 20.20.20.20 if ip_addr is 2002::abcd - 2002::abcd/128 - 20.20.20.20/32 |
| subscriber_id | String | No | Must be in the avp_name = avp_value format | - User_Name = Steve - IMEI = 123456 - IMSI = 78910 |
| site | String | No | Site same must be the same as that configured on the **Subscribers Site** tab in Grid Manager | pc_site1 |
| nas_contextual | String | No | - Must be in the avp_name = avp_value format - avp_name must be one among the list of Attribute Value Pairs displayed on the **NAS Contextual Information** list on the **Subscriber Services Properties** tab | - NAS-PORT = 25000 - NAS-IP-Address = 20.20.20.20 |
| ancillaries | String | No | - Must be in the avp_name = avp_value format - avp_name must be one among the list of Attribute Value Pairs displayed on the **Ancillary Fields** list on the **Subscriber Services Properties** tab | Subscriber-Secure-Policy=F0FB or Proxy-All=1 |
| accounting_session_id | String | No | - Must be an alphanumeric string | Client-408123-8817 or Acct-Session-Id=408123-8817 |
| subscriber_secure_policy | String | No | - Must be a valid hexadecimal string - Length must not be greater than 8 because it is a 32-bit binary value - Length of the hexadecimal string must be an even number | 0x123456 or 0xABCD or 0x12EFB7 or FFEE4321 or ABCDEF12 |
| parental_control_policy | String | No | - Must be a valid hexadecimal string - Length must not be greater than 32 because it is a 128-bit binary value - Length of the hexadecimal string must be an even number | 123FAB78FA987654F000103A0B201245 |
| wpc_category_policy | String | No | - Must be a valid hexadecimal string - Length must not be greater than 32 because it is a 128-bit binary value - Length of the hexadecimal string must be an even number | 123FAB78FA987654F000103A0B201245 |
| unknown_category_policy | Boolean | No | Must be either TRUE or FALSE | TRUE or FALSE |
| dynamic_category_policy | Boolean | No | Must be either TRUE or FALSE | TRUE or FALSE |
| bwflag | Boolean | No | Must be either TRUE or FALSE | TRUE or FALSE |
| proxy_all | Boolean | No | Must be either TRUE or FALSE | TRUE or FALSE |
| black_list | String | No | - bwflag must be enabled to specify a value for this field - Must have a list of valid domain names separated by a comma | facebook.com or Facebook.com,bad.com,verybad.com |
| white_list | String | No | - bwflag must be enabled to specify a value for this field - Must have a list of valid domain names separated by a comma | google.com or google.com,good.com,verygood.com |
