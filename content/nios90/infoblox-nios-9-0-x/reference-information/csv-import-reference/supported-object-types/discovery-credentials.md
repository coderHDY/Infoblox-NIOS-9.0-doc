---
title: "Discovery Credentials"
source: "/space/nios90/317850281"
pageId: "317850281"
---
You can define a list of SNMP v1/v2c credentials or a list of SNMPv3 credentials to import through a CSV file. Sensitive authentication information may be part of an SNMP credential import, including SNMPv1 or SNMPv2c communities or SNMPv3 user/password tuples for privacy and authentication. This information is also stored in the NIOS database.  
CSV import of credentials contains community strings and passwords in plain text. Imported CSV files are uploaded with a POST in an HTTPS session and are deleted immediately after the import operation completes, whether or not the import is successful.

# SNMPv1/SNMPv2c Credentials Format

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guideline** |
| --- | --- | --- | --- | --- | --- |
| Header-discoverysnmpv1v2credentials | String | Yes |  | SNMPCredential |  |
| comment | String | No | Comment | comment | Use this field to set or retrieve the comment on SNMPv1 and SNMPv2 users. |
| community_string | String | Yes | Read Community | community_string |  |
| _new_community_string | String | No |  |  | Use this field to set or retrieve the public community string. |
| parent | String | Yes | SNMPv1/v2 |  | This is the existing credential. |

# SNMPv3 Credentials Format

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guideline** |
| --- | --- | --- | --- | --- | --- |
| Header-discoverysnmpv3credentials | String | Yes |  | SNMP3Credential |  |
| user | String | Yes | Name | User | Use this field to set or retrieve the SNMPv3 user name. |
| _new_user | String | No | Name |  | Add this field to overwrite the user field when you use the overwrite or merge option. |
| authentication_password | String (if protocol is (MD5/SHA) | No | Auth Password | authentication_password | Use this field to set the authentication password if the authentication protocol is MD5 or SHA. This is a write-only attribute. |
| authentication_protocol | String (valid values are MD5/SHA/NONE/SHA-224/SHA-256/ SHA-384/SHA-512) | No | Auth Protocol | authentication_protocol | Use this field to set or retrieve the authentication protocol. |
| _new_authentication_protocol | String | No |  |  | Add this field to overwrite the authentication_protocol field when you use the overwrite or merge option. |
| comment | String | No | Comment |  | Add this field to overwrite the comment you entered for the credential. |
| parent | String | Yes | SNMPv3 |  |  |
| privacy_password | String (if protocol is AES/DES/3DES) | No | Privacy Password | privacy_password | Use this field to set the privacy password if the privacy protocol is 'AES', 'DES' or '3DES'. This is a write-only attribute. |
| privacy_protocol | String (valid values: AES-128/DES/3DES/NONE/AES-192/AES-192C/AES-256/AES-256C)   | No | Privacy Protocol | privacy_protocol | Use this field to set or retrieve the privacy protocol. |
| _new_privacy_protocol | String | No |  |  | Add this field to overwrite the privacy_protocol field when you use the overwrite or merge option. |
