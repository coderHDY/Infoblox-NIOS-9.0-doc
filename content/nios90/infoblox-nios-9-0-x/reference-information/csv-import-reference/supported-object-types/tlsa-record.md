---
title: "TLSA Record"
source: "/space/nios90/280661634"
pageId: "280661634"
---
| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| Header-TlsaRecord | String | Yes |  |  | Identifies the first row as a header row for the TLSA record objects. Example: TlsaRecord. |
| name | String | Yes | Name | name | This field indicates the name of the TLSA resource record. Example: _123._tcp. |
| certificate_usage | Unsigned integer | Yes | Certificate Usage | certificate_usage | Indicates the data that is used to match the certificate presented in the TLS handshake. Example: 0. |
| selector | Unsigned integer | Yes | Selector | selector | Specifies which part of the TLS certificate presented by the server is matched with the data during TLS handshake. Example: 1. |
| matched_type | Unsigned integer | Yes | Matched Type | matched_type | Specifies how the certificate association is presented. Example: 2. |
| certificate_data | String | Yes | Certificate Data | certificate_data | Either raw data for matching type No hash, or the hash of the raw data for matching types SHA 256 bit and SHA 512 bit. Example: d2abde240d7cd3ee6b4b28c54df034b979 83a1d16e8a410e4561cb106618e971. |
| _new_certificate data | String | No | Certificate Data | certificate_data | Add this field to overwrite the certificate_data field when you select the overwrite or merge option. |
| comment | String | No | Comment | comment |  |
| ttl | Boolean | No | TTL | ttl | This is an inherited field. For information, see [*Data Specific Guidelines*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/guidelines-for-csv-import/data-specific-guidelines). |
| fqdn | String | Yes | FQDN | name zone | This field combines the service name and the zone name to form the FQDN. Example: _http._tcp.corp100.com |
| _new_fqdn | String | No |  | zone | Add this field to overwrite the fqdn field when you select the overwrite or merge option. |
| view | String | No | DNS View | views | If no view is specified, the Default view is used. Example: Default |
| disabled | Boolean | No | Disable | disable | Example: FALSE |
| creator | String | No |  | creator | Example: STATIC |

# Examples

This section contains examples of how to create data files for TLSA records. All examples use comma as the separator. You can use other supported separators, such as semicolon, space, or tab.

## Adding a TLSA Record

This example shows how to add a new TLSA record.

`header-tlsarecord,certificate_data*,certificate_usage*,fqdn*,matched_type*,selector*, creator,disabled,name,view,ADMGRP-cloud-api-only,EA-Site`  
`tlsarecord,2D2D2D2D2D424547494E20434552544946494341544520524551554553542D2D2D2D2D0A4D4 94943354443434163774341514177675A347,0,_443._tcp.doctest,0,0,STATIC,FALSE,_tcp._443,`  
` default,RO,Boston`

## Overwriting TLSA Record Data

This example shows how to overwrite the following data of a TLSA record. Consider an example where certificate_usage* is 0 as in the following example:

`header-tlsarecord,certificate_data*,certificate_usage*,fqdn*,matched_type*,selector*, creator,disabled,name,view,ADMGRP-cloud-api-only,EA-Site`  
`tlsarecord,2D2D2D2D2D424547494E20434552544946494341544520524551554553542D2D2D2D2D0A4D4 94943354443434163774341514177675A347,0,_443._tcp.doctest,0,0,STATIC,FALSE,_tcp._443,`  
` default,RO,Boston`

Note that` certificate_usage*` is changed from 0 to 1:

`header-tlsarecord,certificate_data*,certificate_usage*,fqdn*,matched_type*,selector*, creator,disabled,name,view,ADMGRP-cloud-api-only,EA-Site`  
`tlsarecord,2D2D2D2D2D424547494E20434552544946494341544520524551554553542D2D2D2D2D0A4D4 94943354443434163774341514177675A347,1,_443._tcp.doctest,0,0,STATIC,FALSE,_tcp._443,`  
` default,RO,Boston`

## Merging TLSA Record Data

This example shows how to disable an existing TLSA record.

`header-tlsarecord,certificate_data*,certificate_usage*,fqdn*,matched_type*,selector*, creator,disabled,name,view,ADMGRP-cloud-api-only,EA-Site`  
`tlsarecord,2D2D2D2D2D424547494E20434552544946494341544520524551554553542D2D2D2D2D0A4D4 94943354443434163774341514177675A347,0,_443._tcp.doctest,0,0,STATIC,TRUE,_tcp._443,`  
` default,RO,Boston`

This example shows how to add new FQDN to a TLSA record.

`header-tlsarecord,certificate_data*,certificate_usage*,fqdn*,_new_fqdn,matched_type*, selector*,creator,disabled,name,view,ADMGRP-cloud-api-only,EA-Site`  
`tlsarecord,2D2D2D2D2D424547494E20434552544946494341544520524551554553542D2D2D2D2D0A4D4 94943354443434163774341514177675A347,0,_443._tcp.doctest,_443._udp.doctest,0,0,STATIC,`  
` FALSE,_tcp._443,default,RO,Boston`
