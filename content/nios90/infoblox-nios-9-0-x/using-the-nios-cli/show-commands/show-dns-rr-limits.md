---
title: "show dns_rr_limits"
source: "/space/nios90/843841591"
pageId: "843841591"
---
Use the `show dns_rr_limits` CLI command to display the maximum number of resource records allowed for a single type within a resource record and to display the maximum number of different resource record types that is associated with a domain name at *Grid DNS Properties* and *Member DNS Properties*.

The `show dns_rr_limits grid` command displays the maximum number of resource records allowed for a single type within a resource record and maximum resource record types that can be associated with a domain name at *Grid DNS Properties*.  
The `show dns_rr_limits member host_name` command is executed on the Grid Master to display the maximum number of resource records allowed for a single type within a resource record and maximum resource record types that can be associated with a domain name at the *Member DNS Properties*.  
The `show dns_rr_limits` command executed on the member displays the maximum number of resource records allowed for a single type within a resource records and maximum resource record types that can be associated with a domain name at *Member DNS Properties screen*. For more information on how to set these values, see [*set dns_rr_limits*](https://infoblox-docs.atlassian.net/wiki/spaces/nios90/pages/820510868).

# Syntax

Infoblox &gt; show dns_rr_limits

| **Argument** | **Description** |
| --- | --- |
| `grid` | Use the `grid` option to display the maximum number of resource records allowed per type and per name configured in the *Grid DNS Properties* configuration. |
| `member` | Use the `member` option to display the maximum value for the maximum number of resource records (RRs) allowed for a single type within an RRset and to set the maximum number of different resource record types that can be associated with a domain name on the *Member DNS Properties *screen from Grid Master. Ensure to provide the member host name. |

# Example

`Infoblox &gt; show dns_rr_limits grid
Grid configuration:
  max_records_per_type: 2000 (default)
  max_types_per_name: 100 (default)


Infoblox &gt; show dns_rr_limits member dns_member.com
Member configuration inherited:
  max_records_per_type: 2000 (default)
  max_types_per_name: 100 (default)
`
