---
title: "set dns_rr_limits"
source: "/space/nios90/844333145"
pageId: "844333145"
---
Use the `set dns_rr_limits` CLI command to configure the maximum number of resource records allowed for a single type within resource records and to set the maximum number of different resource record types that can be associated with a domain name at the *Grid DNS Properties* and *Member DNS Properties screens*.

# Syntax

Infoblox &gt; set dns_rr_limits

`Tuning DNS max_records_per_type and max_types_per_name on the Grid level:`

`set dns_rr_limits [grid] [records_per_type &lt;number&gt;|default|nolimit] [types_per_name &lt;number&gt;|default|nolimit]`  
`set dns_rr_limits [grid] [records_per_type &lt;number&gt;|default|nolimit]`  
`set dns_rr_limits [grid] [types_per_name &lt;number&gt;|default|nolimit]`

`Tuning DNS max_records_per_type and max_types_per_name on the Member level:`  
`set dns_rr_limits [override|inherit]`  
`set dns_rr_limits [records_per_type &lt;number&gt;|default|nolimit] [types_per_name &lt;number&gt;|default|nolimit]`

`set dns_rr_limits [records_per_type &lt;number&gt;|default|nolimit]`  
`set dns_rr_limits [types_per_name &lt;number&gt;|default|nolimit]`

| **Argument** | **Description** |
| --- | --- |
| `&lt;number of records&gt;` | Specifies the maximum number of resource records allowed for a single type within a record set at *Grid DNS Properties* and *Member DNS Properties screens*. |
| `&lt;number of types&gt;` | Specifies the maximum number of different resource record types that can be associated with a single domain name at *Grid DNS Properties* and *Member DNS Properties *screens. |
| `default` | Use the `default` option to set the default values. |
| `nolimit` | Use `nolimit` option to configure the maximum value for the maximum number of resource records  allowed for a single type within a resource record and to set the maximum number of different resource record types that can be associated with a domain name options. |
| `override` | Use the `override `option to override the *Grid DNS Properties* configuration. |
| `inherit` | Use the `inherit `option to inherit the configuration from *Grid DNS Properties *screen. |
| `grid` | Use the `grid `option to configure the the maximum number of resource records allowed per type and per name configured in the *Grid DNS Properties *screen. |
| `member` | Use the `member` option to configure the maximum value for the maximum number of resource records (RRs) allowed for a single type within a resource record and to set the maximum number of different resource record types that can be associated with a domain name on the *Member DNS Properties *screen from Grid Master. Ensure to provide the member host name. |

# Example

`Infoblox &gt; set dns_rr_limits grid records_per_type 4000 types_per_name 200`  
`Successfully configured on GridDns records_per_type and types_per_name`

`NOTICE: You must restart the DNS service on entire Grid in order for the changes to take effect.`

`Infoblox &gt; set dns_rr_limits member dns_member.com override`  
`Sucessfully overrided the Grid DNS configuration.`  
`NOTICE: You must restart the DNS service in order for the changes to take effect.`

`Infoblox &gt; set dns_rr_limits member dns_member.com records_per_type 3001 types_per_name 301`  
`Successfully configured on Member DNS records_per_type and types_per_name`  
`NOTICE: You must restart the DNS service in order for the changes to take effect.`
