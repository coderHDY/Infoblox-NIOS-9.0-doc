---
title: "Response Policy Zone"
source: "/space/nios90/280759367"
pageId: "280759367"
---
For a Response Policy Zone, CSV import supports all the values that are listed in [*Authoritative Zone*](/nios90/infoblox-nios-9-0-x/reference-information/csv-import-reference/supported-object-types/authoritative-zone) along with the following values:

| **Field Name** | **Data Type** | **Required (Yes/No)** | **Associated GUI Field** | **Associated PAPI Method** | **Usage and Guidelines** |
| --- | --- | --- | --- | --- | --- |
| priority | Unsigned integer | No |  |  | Example: 1001 |
| severity | String | No | Severity |  | Valid values are Critical, Major, Warning, and Informational |
| substitute_name | FQDN | No |  |  | Example: JKL.NET |
| rpz_policy | String | No | Policy Override |  | Valid values are GIVEN, NXDOMAIN, NODATA, PASSTHRU, SUBSTITUTE, and DISABLED |
| rpz_drop_ip_rule_enabled | Boolean | No | Ignore RPZ-IP triggers with too small prefix lengths |  | When this is set to **True,** DNS server ignores RPZ-IP rules with prefix lengths that are less than the specified prefix length limit. Example: TRUE |
| rpz_drop_ip_rule_min   _prefix_length_ipv4 | Unsigned Integer | No | Minimum IPv4 Prefix Length |  | Indicates the minimum IPv4 prefix length for RPZ-IP triggers. The default value is 29. |
| rpz_drop_ip_rule_min   _prefix_length_ipv6 | Unsigned Integer | No | Maximum IPv4 Prefix Length |  | Indicates the minimum IPv6 prefix length for RPZ-IP triggers. The default value is 112. |
