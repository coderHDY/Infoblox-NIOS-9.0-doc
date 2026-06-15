---
title: "Configuring GSS-TSIG keys"
source: "/space/nios90/280405160"
pageId: "280405160"
---
You can upload keytab files that contain a single GSS-TSIG key or multiple GSS-TSIG keys on a single NIOS appliance. For each member in the Grid, you can upload up to 256 GSS-TSIG keys in a single keytab file. Trust relationships between AD domains and AD forests are not required. You can upload GSS-TSIG keys through Grid Manager or the Infoblox API.  
Note that only superusers can manage all GSS-TSIG keys globally on a given member through Grid Manager or the Infoblox API. Using this feature, superusers can determine the keys that belong to a particular member. You can assign multiple GSS-TSIG keys to a member and all these keys are saved in the Grid. The uploaded keys will be available in the member DNS, Grid DNS, member DHCP or Grid DHCP properties. NIOS supports the following GSS-TSIG encryption types:

- des-cbc-crc
- des-cbc-md5
- arcfour-hmac-md5
- aes128-cts-hmac-sha1-96
- aes256-cts-hmac-sha1-96

NIOS displays a warning message in Grid Manager and in the syslog if you upload a key that does not belong to the GSS-TSIG encryption types. For more information, see Logging Messages below.
