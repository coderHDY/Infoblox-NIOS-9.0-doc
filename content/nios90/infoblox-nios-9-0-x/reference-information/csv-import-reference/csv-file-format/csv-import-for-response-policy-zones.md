---
title: "CSV Import for Response Policy Zones"
source: "/space/nios90/280269410"
pageId: "280269410"
---
You can import local RPZs (Response Policy Zones) and their rulesets using the **CSV** **Import** feature. When you import local RPZs using this feature, you must specify three new columns, **priority,** **rpz_policy,** and **substitute_name** with relevant values, whereas importing an RPZ ruleset requires specifying the value for parent RPZ in the **parent_zone** column, as mentioned in the following tables. For a local RPZ, CSV import supports all the values that are listed in [*Authoritative Zone*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/authoritative-zone) along with the three new columns. However, for RPZ rulesets it supports the values that are listed in [*CNAME Record*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/cname-record) along with a new column **parent_zone**.  
For example, if you want to add a new local RPZ, **JKL.INFO** and substitute this domain with **JKI.NET**, then you must mention the priority, rpz_policy, and substitute name as follows:

| **A** | **B** | **C** | **D** | **E** | **F** | **G** | **H** | **I** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **HEADER-** **RESPONSEPOLICYZONE** | **FQDN*** | **ZONE_** **FORMAT*** | **ALLOW_UPDATE** | **PRIORITY** | **RPZ_POLICY** | **SUBSTITUTE**    **_NAME** | **VIEW** | **ZONE_TYPE** |
| RESPONSEPOLICYZONE | ABC.NET | FORWARD | TSIG-RPZ_LOCAL_UP    DATER_KEY._default. abc.net/kA36uJeavm hrH2Yqx8hEDPC6ok SFcsOb2evyWVAO5f M=/ALLOW/HMAC-S HA256 | 1001 | GIVEN |  | DEFAULT | RESPONSEPOLICY |
| RESPONSEPOLICYZONE | XYZ.IN | FORWARD | TSIG-RPZ_LOCAL_UP    DATER_KEY._default. xyz.in/kA36uJeavmh rH2Yqx8hEDPC6okSF csOb2evyWVAO5fM=    /ALLOW/HMAC-SHA2 56 | 1002 | NXDOMAIN |  | DEFAULT | RESPONSEPOLICY |
| RESPONSEPOLICYZONE | AIM.EDU | FORWARD | TSIG-RPZ_LOCAL_UP    DATER_KEY._default. aim.edu/vIeLOfean4 YZUMOzGIvWnxhtOP XWM5QfJwxfHJbDXjQ    =/ALLOW/HMAC-SHA 256 | 1003 | NODATA |  | DEFAULT | RESPONSEPOLICY |
| RESPONSEPOLICYZONE | PQDR.C OM | FORWARD | TSIG-RPZ_LOCAL_UP    DATER_KEY._default. pqdr.com/R9TDpx8N    +cBs0W32hEDzk5M wRjPuH%2FeYJsSgUk sX8SM=/ALLOW/HM AC-SHA256 | 1004 | PASSTHRU |  | DEFAULT | RESPONSEPOLICY |
| RESPONSEPOLICYZONE | JKL.INFO | FORWARD | TSIG-RPZ_LOCAL_UP    DATER_KEY._default.j kl.info/rLopR5+Sf4M pcfYpDJV+KWAdtTXA U5kFTFWFWuLV2Rw=    /ALLOW/HMAC-SHA2 56 | 1005 | SUBSTITUTE | JKI.NET | DEFAULT | RESPONSEPOLICY |
| RESPONSEPOLICYZONE | ASAC.CO M | FORWARD | TSIG-RPZ_LOCAL_UP    DATER_KEY._default. asac.com/kA36uJeav mhrH2Yqx8hEDPC6o kSFcsOb2evyWVAO5 fM=/ALLOW/HMAC-S HA256 | 1006 | DISABLED |  | DEFAULT | RESPONSEPOLICY |

Examples of Substitute and Block Domain Names:  
The following example shows a new column, **parent_zone,** which is added to the spreadsheet while importing an RPZ ruleset to a local RPZ **abc.net**:

| **A** | **B** | **C** | **D** | **E** | **F** |
| --- | --- | --- | --- | --- | --- |
| **HEADER-** **RESPONSEPOLICYCNAMERECORD** | **FQDN*** | **CANONICAL_NAME** | **DISABLED** | **PARENT_ZONE** | **VIEW** |
| RESPONSEPOLICYCNAMERECORD | CLARITY.ABC.NET | CLEAR.IN | FALSE | NET.ABC | DEFAULT |
| RESPONSEPOLICYCNAMERECORD | ARM.ABC.NET |  | FALSE | NET.ABC | DEFAULT |

Example of an A Record CSV format:

| **A** | **B** | **C** | **D** | **E** | **F** |
| --- | --- | --- | --- | --- | --- |
| **HEADER-** **RESPONSEPOLICYARECORD** | **ADDRESS*** | **FQDN*** | **DISABLED** | **PARENT_ZONE** | **VIEW** |
| RESPONSEPOLICYCNAMERECORD | 10.32.2.1 | PQR.ABC.NET | FALSE | NET.ABC | DEFAULT |

Example of an RPZ Policy IP Address:

| **A** | **B** | **C** | **D** | **E** | **F** |
| --- | --- | --- | --- | --- | --- |
| **HEADER-** **RESPONSEPOLICYIPADDRESS** | **FQDN*** | **CANONICAL_NAME** | **DISABLED** | **PARENT_ZONE** | **VIEW** |
| RESPONSEPOLICYIPADDRESS | 10.1.2.3.ABC.NET | 10.1.2.3 | FALSE | NET.ABC | DEFAULT |

Example of an RPZ Policy Client IP Address:

| **A** | **B** | **C** | **D** | **E** | **F** |
| --- | --- | --- | --- | --- | --- |
| **HEADER-** **RESPONSEPOLICYCLIENTIPADDRESS** | **FQDN*** | **CANONICAL_NAME** | **DISABLED** | **PARENT_ZONE** | **VIEW** |
| RESPONSEPOLICYCLIENTIPADDRESS | 10.1.2.1.ABC.NET | 10.1.2.1 | FALSE | NET.ABC | DEFAULT |

Note the following:

- You must specify the name of the parent zone when you import RPZ rules to a local zone. For example, **clarity.abc.net** where **abc.net** is the local RPZ.
- In the above example, the domain name **clarity.abc.net** is substituted with the domain name **clear.in** because **clear.in** is specified as the canonical name.
- The domain **arm.abc.net** is blocked and the DNS client receives a message that the domain does not exist. For more information about RPZ rules, refer to the *Infoblox* *NIOS* *Administrator* *Guide*.
