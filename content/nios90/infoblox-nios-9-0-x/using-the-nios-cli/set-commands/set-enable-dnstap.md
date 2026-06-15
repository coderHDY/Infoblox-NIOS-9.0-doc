---
title: "set enable_dnstap"
source: "/space/nios90/280855743"
pageId: "280855743"
---
Use the `set enable_dnstap` command to enable or disable using dnstap to log DNS queries and responses. For information about using dnstap, see *[Capturing DNS Queries and Responses](/nios90/infoblox-nios-9-0-x/administering-nios/monitoring/monitoring-the-appliance/capturing-dns-queries-and-responses)*. To view the status of the dnstap configuration, see *[show dnstap-status](/nios90/infoblox-nios-9-0-x/using-the-nios-cli/show-commands/show-dnstap-status)*.

# Syntax

`set enable dns_tap [on|off]`

| **Argument** | **Description** |
| --- | --- |
| `on` | Enables the use of the dnstap log format to log DNS queries and responses at high rates to well-known destinations. |
| off | Disables the use of the dnstap log format to log DNS queries and responses. |

# Examples

To enable the use of the dnstap log format:

`Infoblox &gt; ``set enable_dnstap on`  
`Override Grid settings and configure DNSTAP on member level? (y or n):`

The input `y` overrides Grid settings and enables member-level dnstap configuration. The input `n `inherits Grid settings; no further configuration is performed.

To disable the use of the dnstap log format:

`Infoblox &gt; set enable_dnstap off`
